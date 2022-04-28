<template>
    <div>
        <div id="map" class="map"></div>
        <layerPanel 
            :child_msg="'Layer-Panel'"
            :layer_list="layer_list"
            @setLayerVisible="setLayerVisible"
            @setLayerOpacity="setLayerOpacity"
            @setLayerMetadata="setLayerMetadata"
        />
        <metadataPanel 
            :child_msg="'Metadata-Panel'"
            :settings="settings"
            :title="title"
            :abstract="abstract"
            :to="to"
            :tf="tf"
            :typology="typology"
            :units="units"
            :crs="crs"
            :legend="legend"
        />
        <timePanel 
            :child_msg="'Time-Panel'"
            :title="title"
            :datesList="datesList"
            :datesListLength="datesListLength"
            :currentDate="currentDate"
            :currentDateIndex="currentDateIndex"
            :currentGroup="currentGroup"
            @updateLayerSlider="setLayerVisibleTS"
            @updateLayerDropdown="setLayerVisibleTS"
            @stepBackwards="setLayerVisibleTS"
            @stepForwards="setLayerVisibleTS"
        />
        <basemapPanel 
            :child_msg="'Basemap-Panel'"
            :data="basemap_settings"
            :layer_list="layer_list"
            @setLayerVisible="setLayerVisible"
        />
        <slidePanel 
            :child_msg="'Slide-Panel'"
            :settings="settings"
        />
        <plotPanel :child_msg="'Plot-Panel'"/>
        <!-- TODO: set inputs pixelInfo, pixelUnits, pixelCoordinates; for now random values -->
        <popUp
            :map="map"
            :title="title"
            :evtCoordinate="'click-on map'"
            :pixelCoordinate="'select a pixel'"
            :pixelInfo="'click-on map'"
            :pixelUnits="'select a pixel'"
        />
    </div>

</template>

<script>
// Add Map
import {addMap} from '@/assets/js/map'
// Add Controls to map
import {layerPanel,
		metadataPanel,
		timePanel,
		basemapPanel,
		plotPanel,
		slidePanel,
		popup} from 'js/panelCreate';
// Organize layers
import {organizeLayers, basemapLayers, createLayerGroups, plotData} from '@/assets/js/requestLayers'
// Components
import LayerPanel from './panels/LayerPanel.vue'
import MetadataPanel from './panels/MetadataPanel.vue'
import TimePanel from './panels/TimePanel.vue'
import BasemapPanel from './panels/BasemapPanel.vue'
import PlotPanel from './panels/PlotPanel.vue'
import SlidePanel from './panels/SlidePanel.vue'
import PopUp from './panels/PopUp.vue'
//Import legend images
import chl_legend from 'img/legend/chl_legend.png'
import tsm_legend from 'img/legend/tsm_legend.png'
import lswt_legend from 'img/legend/lswt_legend.png'
// Handle the request
import axios from "axios"
// XML parser
import WMSCapabilities from 'ol/format/WMSCapabilities';
const parser = new WMSCapabilities();
// OL import
import {toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import Overlay from 'ol/Overlay';
import ImageWMS from 'ol/source/ImageWMS';

export default {
    name: "WebGISContainer",
    data () {
        return {
            basemap_settings: this.settings.basemaps,
            urlLayerInfo: this.settings.urlWMSLayerInfo,
            layer_list: {},
            layer_groups: {},
            map: {},
            title: "Select a Layer",
            typology:"N/A",
            abstract:"N/A",
            to:"N/A",
            tf:"N/A",
            crs: "N/A",
            units:"N/A",
            legend:"N/A",
            // Time Series Visualization Variables
            datesList:{},
            currentGroup:0,
            currentDate:'',
            currentDateIndex:0,
            datesListLength:'',
            noGetinfo:0,
        }
    },
    props: {
        settings: { 
            type: Object, 
            required: true,
        },
    },
    components: {
        layerPanel: LayerPanel,
        metadataPanel: MetadataPanel,
        timePanel: TimePanel,
        basemapPanel: BasemapPanel,
        plotPanel: PlotPanel,
        slidePanel: SlidePanel,
        popUp: PopUp,
    },
    methods: {
        // TODO: refer to the current layer indexes values
        setLayerVisible(value) {
            let index = value.index;
            let nGroup = value.nGroup;
            // Static Layers Case
            if (nGroup == 0) {
                let basemaps = this.map.getLayers().array_[nGroup].values_.layers.array_
                basemaps.forEach((basemap,i) => {
                    if (index!=i) {
                        basemap.setVisible(false)
                    } else if (basemaps.length<index) {
                        basemap.setVisible(false)
                    } else {
                        basemap.setVisible(true)
                    }
                });
            } else if (nGroup == 1) {
                let currentVisibility = this.map.getLayers().array_[nGroup].values_.layers.array_[index].getVisible()
                this.map.getLayers().array_[nGroup].values_.layers.array_[index].setVisible(!currentVisibility)
            } else {
                let ll = this.map.getLayers().array_[nGroup+index]
                let lll = ll.values_.layers.array_.length-1
                // Search layer visibility of the collection
                let layers_col = this.map.getLayers().array_[nGroup+index].values_.layers.array_
                let layer_check = 0
                layers_col.forEach((layer,i) => {
                    let currentVisibilityLayer = this.map.getLayers().array_[nGroup+index].values_.layers.array_[i].getVisible();
                    if (layer.getVisible()==true && i!=lll) {
                        this.map.getLayers().array_[nGroup+index].values_.layers.array_[i].setVisible(!currentVisibilityLayer)
                        layer_check++
                        return false
                    } else if (layer_check==0 && i==lll) {  
                        this.map.getLayers().array_[nGroup+index].values_.layers.array_[lll].setVisible(!currentVisibilityLayer)     
                        this.currentDate = layer.date
                    }
                });
                // Visibility on/off only for the last layer of the group
    
            }
        },
        setLayerVisibleTS(value) {
            let nGroup = value.nGroup;
            let index = value.emitDate;
            let getLayersGroup = this.map.getLayers().array_[nGroup].values_.layers.array_
            getLayersGroup.forEach((element,i) => {
                
                if (index==i){
                    element.setVisible(true)
                } else {
                    element.setVisible(false)
                }
            });
        },
        setLayerOpacity(value){
            let opacity = value.opacity;
            let index = value.index;
            let nGroup = value.nGroup;
            // It is necessary to re-render the layer to display the changes in the map
            if (nGroup <= 1) {
                if (this.map.getLayers().array_[nGroup].values_.layers.array_[index].getVisible() == true) {
                    this.map.getLayers().array_[nGroup].values_.layers.array_[index].setVisible(false)
                    this.map.getLayers().array_[nGroup].values_.layers.array_[index].values_.opacity = opacity
                    this.map.getLayers().array_[nGroup].values_.layers.array_[index].setVisible(true)
                } else {
                    this.map.getLayers().array_[nGroup].values_.layers.array_[index].values_.opacity = opacity
                }
            } else { 
                let ll = this.map.getLayers().array_[nGroup+index]
                if (ll.getVisible()==true) {
                    ll.setVisible(false)
                    ll.values_.opacity=opacity;
                    ll.setVisible(true)
                } else {
                    ll.values_.opacity=opacity;
                }
            }
        },
        setLayerMetadata(value){
            let layerType = value.layerType;
            let layerName = value.layerName.key;
            let layer = this.layer_list[layerType][layerName]
            this.title = layerName
            // Retrieve layer characteristics 
            if (layerType == 'time'){
                let tplg = layer.typology
                let timeFormat = layer.timeFormatted
                this.typology = tplg
                this.abstract = this.settings.typology[tplg].abstract
                this.units = this.settings.typology[tplg].units
                this.crs = layer.crs
                // Default legend from source folder
                if (this.typology == 'CHL'){
                    this.legend = chl_legend
                } else if (this.typology == 'TSM') {
                    this.legend = tsm_legend
                } else {
                    this.legend = lswt_legend
                }

                // Get Legend from wms server
                // this.legend = layer.layer[0].values_.source.getLegendUrl();
                
                this.to = timeFormat[0]
                this.tf = timeFormat[timeFormat.length-1]
                // Initialize the variables for the time control
                this.datesList = this.layer_list.time[layerName].timeFormatted
                this.currentDate = this.datesList[Object.keys(this.datesList).length-1]
                this.currentDateIndex = Object.keys(this.datesList).length
                this.datesListLength = Object.keys(this.datesList).length
                this.currentGroup = Object.keys(this.layer_list.time).indexOf(layerName)
            }

            $('.metadata-panel').addClass('active');
            $('.metadata-panel').css('display','block');      
            if (layerType=='time'){
                $('.time-panel').addClass('active');
                $('.time-panel').css('display','block');
                $('.show-metadata').addClass('active');
                $('.show-time').addClass('active');
            }   
        },
        downloadData() {
            // TODO: install CSW extension to GeoServer for allowing the download of datasets. For now, it is possible to download as georeferenced images using the WMS server.
        },
        
    },
    mounted() {
        // Settings
        this.basemap_settings = this.settings.basemaps
        axios.get(this.settings.urlWMSget)
            .then(response => {
                // Parsing Get Capabilities
                let capabilities = parser.read(response.data)
                let layers = capabilities.Capability.Layer.Layer
                let layers_dict = organizeLayers(layers,this.settings.typology,this.settings.urlWMS)
                basemapLayers(layers_dict)
                // TODO: merge dict functions
                let layers_groups = createLayerGroups(layers_dict)
                this.layer_list = layers_dict
                this.layer_group = layers_groups
                // No repetition check to layers groups
                let layers_dict_reduced = {} 
                for (let [group,collection] of Object.entries(layers_dict['time'])) {
                    let groupName = group.split('_').splice(0,2).join('_');
                    if (groupName in Object.keys(layers_dict_reduced)) {
                        
                    } else {
                        layers_dict_reduced[groupName] = collection
                    }
                    
                }
                this.layer_list['time'] = layers_dict_reduced
                layers_dict_reduced = this.layer_list
                let layers_groups_reduced = createLayerGroups(layers_dict_reduced)
                return {layers_groups_reduced, layers_dict_reduced}
            })
            .then(response=> {
                const layers_groups = response.layers_groups_reduced;
                const layers_dict = response.layers_dict_reduced;
                const map = addMap()
                for (let key in layers_groups) {
		            for (let group in layers_groups[key]){;
			            map.addLayer(layers_groups[key][group]);
		            }
	            }
                this.map = map
                /* ADD POPUP OVERLAY */ 

                // Add popup overlay
                const popupContainer = document.getElementById('popup');
                const popupTitle = document.getElementById('popup-title');
                const popupCoordinate = document.getElementById('popup-coordinate');
                const popupPixelInfo = document.getElementById('popup-getinfo');
                const popupCloser = document.getElementById('popup-closer');
                const popupOverlay = new Overlay({
                    element: popupContainer,
                    autoPan: {
                        animation: {
                        duration: 250,
                        },
                    },
                });
                /**
                 * Add a click handler to hide the popup.
                 * @return {boolean} Don't follow the href.
                 */
                popupCloser.onclick = function () {
                    popupOverlay.setPosition(undefined);
                    popupCloser.blur();
                return false;
                };
                // Add popup controller to map
                map.addControl(popupOverlay)
                const view = this.map.getView();
                const viewResolution = /** @type {number} */ (view.getResolution());
                map.on('singleclick', function (evt) {
                    const coord = evt.coordinate;
                    const hdms = toStringHDMS(toLonLat(coord));
                    popupCoordinate.innerHTML = '<p>Coordinate: </p><code>' + hdms + '</code>';
                    popupOverlay.setPosition(coord);
                    const pixel = map.getEventPixel(evt.originalEvent);
                    // Array for the request of data in time
                    let temp_array = {'values':[],'typology':''}
                    this.noGetinfo = 0;
                    map.forEachLayerAtPixel(pixel, function (layer,rgba) {
                        if(layer.title != "basemap"){
                            var url = layer.values_.source.getFeatureInfoUrl(
                                evt.coordinate,
                                viewResolution,
                                'EPSG:3857',
                                {'INFO_FORMAT': 'application/json'}
                            );
                            var  url = "https://www.webgis.eo.simile.polimi.it/api/getLayerInfo?" + url.split('/')[url.split('/').length-1].split('?')[1]
                            if (url) {
                                const myRequest = new Request(url);
                                fetch(myRequest)
                                .then((response) => response.json())
                                .then((html) => {
                                    popupPixelInfo.innerHTML = '<p>Value: </p><code>' + html.data.features['0'].properties["GRAY_INDEX"].toFixed(2) + ' ' + layer.units + '</code>'; 
                                    popupTitle.innerHTML = '<p>'+layer.name.split('_').splice(0,2).join('_')+':' +layer.date+'</p>';
                                });

                                // Implementing the requests for building the plot
                                let layerName = layer.name.split('_').splice(0,2).join('_')
                                let layerCRS = layer.name.split('_')[2]//Taking the first element matching the criteria; include a condition for the CRS
                                let currentLayerList = layers_dict[layer.title][layerName].layer
                                currentLayerList.forEach(layer => {
                                    var asdf = layer.values_.source.getFeatureInfoUrl(
                                        evt.coordinate,
                                        viewResolution,
                                        'EPSG:3857',
                                        {'INFO_FORMAT': 'application/json'}
                                    );
                                    var  asdf = 'https://www.webgis.eo.simile.polimi.it/api/getLayerInfo?' + asdf.split('/')[asdf.split('/').length-1].split('?')[1]
                                    let a = fetch(asdf)
                                    .then((response) => response.json())
                                    .then((html) => {
                                        let c = html.data.features[0]                                        
                                        if (c != undefined) {
                                            let v = c.properties["GRAY_INDEX"]
                                            if (v != null) {
                                                let obs = {
                                                    'month': layer.date.toString(),
                                                    'count': Number(v.toFixed(2))
                                                }
                                                return obs
                                            }
                                        }
                                    })
                                    temp_array['values'].push(a)
                                })
                                temp_array['typology']=layers_dict[layer.title][layerName].typology;
                                plotData(temp_array)
                            }
                            // Array of time series getFeature
                        } else {
                            popupPixelInfo.innerHTML = '<p>Value: </p><code>' + 'N/A' + '</code>'; 
                            popupTitle.innerHTML = 'Click on a layer';
                        }
                    });
                });
                // Cursor behaviour on hoover (active layers, NOT basemaps)
                map.on('pointermove', function (evt) {
                if (evt.dragging) {
                    return;
                }
                    const pixel = map.getEventPixel(evt.originalEvent);
                    const hit = map.forEachLayerAtPixel(pixel, function (layer,rgba) {
                        if(layer.title != "basemap"){
                            return true;
                        }
                });
                    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
                });
            })
            .catch(err => console.log("No layers have been found in the site url"))
    }
}
</script>

<style lang="scss">
@import 'css/style.css';
</style>