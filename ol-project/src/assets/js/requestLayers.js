import axios from "axios"
import WMSCapabilities from 'ol/format/WMSCapabilities';
// Import OL functions
import {Group as LayerGroup, Tile as TileLayer} from 'ol/layer';
import TileWMS from 'ol/source/TileWMS'; 
// Import OL basemap sources
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
// XML parser
const parser = new WMSCapabilities();
// Import plotting function
import { tsPlot } from "./tsPlot";

function getLayersWMS(urlWMS) {
    axios.get(urlWMS)
    .then(response => {
        let capabilities = parser.read(response.data)
        let layers = capabilities.Capability.Layer.Layer
        let group = organizeLayers(layers)
        return group
    })
    .catch(err => {
        console.log(err)
    })
}

function createTileWMS(layerName, url,opacityValue,styleValue) {
    let tileWMS = new TileLayer({
        source: new TileWMS({
        url: url,
        params: {'LAYERS': layerName, 'TILED': true, 'STYLES':styleValue},
        // crossOrigin: 'anonymous',
        serverType: 'geoserver',
        }),
        visible:false,
        opacity:opacityValue,
    })

    return tileWMS
}

function createDictLayers(layersDict,item){
    layersDict[item.name] = {};
    layersDict[item.name].workspace = item.workspace;
    layersDict[item.name].typology = item.typology;
    layersDict[item.name].crs = item.crs;
    layersDict[item.name].sensor = item.sensor;
    layersDict[item.name].timeComplete = [item.timeComplete];
    layersDict[item.name].timeFormatted = [item.timeFormatted];
    layersDict[item.name].level = item.level;//Not always the same. TODO: double check in naming
    layersDict[item.name].layer= [item.layer];
    return layersDict;
}

function organizeLayers(layers,typologies,url) {
    // Available styles for layer typology
    let tp = Object.keys(typologies)
    // Create the dictionary for the groups of layers
    let layers_dict = {}
    layers_dict.static = {}
    layers_dict.time = {}
    layers_dict.basemap = {}
    // Organize the layers in the dictionary
    layers.forEach(element => {
        let item = {}
        let arr = element.Name.split(':')
        if(arr[1].split('_')[2] == 'IT'){
            // Extract info from name.
            // TODO: add exceptions for the irregular name formatting
            item.workspace = arr[0]
            item.name = arr[1].split('_').slice(0,3).join('_');
            // item.name = arr[1].split('_').slice(0,2).join('_');//Remove the CRS from the name
            item.sensor = arr[1].split('_')[0]
            item.typology = arr[1].split('_')[1]
            item.crs = arr[1].split('_')[2]
            if (arr[1].split('_')[3]!=undefined) {
                item.timeComplete = arr[1].split('_')[3];
                let t = arr[1].split('_')[3].split('T')[0]
                item.timeFormatted = t.slice(0,4)+'-'+t.slice(4,6)+'-'+t.slice(6,8);
            } else {
                item.timeComplete = undefined
                item.timeFormatted = undefined
            }
            item.level = arr[1].split('_')[4]
            // Define style based on the layers typology
            let styleValue = ''
            if (tp.includes(item.typology)) {
                styleValue = item.typology.toLowerCase()
            }
            item.layer = createTileWMS(element.Name,url,0.5,styleValue)       

            // Assign the items into the corresponding category
            if (item.timeComplete!=undefined){
                if (item.name in layers_dict.time){
                    // Override layer opacity for time series display
                    item.layer = createTileWMS(element.Name,url,1,styleValue)
                    item.layer['title'] = 'time'
                    item.layer['date'] = item.timeFormatted
                    item.layer['name'] = item.name
                    if (item.name.split('_')[1]=="LSWT"){
                        item.layer['units'] = '[°C]'
                    } else if (item.name.split('_')[1]=="CHL"){
                        item.layer['units'] = '[mg/m3]'
                    } else if (item.name.split('_')[1]=="TSM"){
                        item.layer['units'] = '[g/m3]'
                    }
                    layers_dict.time[item.name].timeComplete.push(item.timeComplete);
                    layers_dict.time[item.name].timeFormatted.push(item.timeFormatted);
                    layers_dict.time[item.name].layer.push(item.layer);
                }
                else {
                    item.layer = createTileWMS(element.Name,url,1)
                    item.layer['title'] = 'time'
                    item.layer['name'] = item.name
                    item.layer['date'] = item.timeFormatted
                    if (item.name.split('_')[1]=="LSWT"){
                        item.layer['units'] = '[°C]'
                    } else if (item.name.split('_')[1]=="CHL"){
                        item.layer['units'] = '[mg/m3]'
                    } else if (item.name.split('_')[1]=="TSM"){
                        item.layer['units'] = '[g/m3]'
                    }
                    layers_dict.time = createDictLayers(layers_dict.time,item);
                }
            }
            else 
                layers_dict.static = createDictLayers(layers_dict.static,item);
            }
        });
    // Return the layers list
    return layers_dict
}

//Temporal function to append the basemaps (add config to the settings file)
function basemapLayers(organizedLayers){
    let basemapLayers = {
        osm:{
            title:'osm',
            layer:[new TileLayer({
                source: new OSM(),
                visible: true
            })],
        },
        // watercolor:{
        //     title:'watercolor',
        //     source:'Stamen',
        //     layer:[new TileLayer({
        //             source: new Stamen({
        //                 layer: 'watercolor',
        //             }),
        //             visible:false
        //             })]
        // },
        terrain:{
            title:'terrain',
            source:'Stamen',
            layer:[new TileLayer({
                    source: new Stamen({
                        layer: 'terrain',
                    }),
                    visible:false
                    })]
        },
        toner:{
            title:'toner',
            source:'Stamen',
            layer:[new TileLayer({
                    source: new Stamen({
                        layer: 'toner',
                    }),
                    visible:false
                    })]
        }
    }
    organizedLayers.basemap = basemapLayers
    return organizedLayers
}

function createLayerGroups(organizedLayers){
    let groups = {}
    let lBasemap = []
    let lStatic = []
    let layersGroupBasemap = []
    let layersGroupStatic = []
    let layersGroup = []
    for (let item in organizedLayers){
        if (item == "time") { //Group time layers
            for (let layerDict in organizedLayers[item]){
                let ll = organizedLayers[item][layerDict].layer
                layersGroup.push(new LayerGroup({
                    layers: ll,
                    visible:true,
                    opacity:0.8
                }))
            }        
        } else {
            for (let staticLayer in organizedLayers[item]) {
                if (item == "basemap") {
                    let t = organizedLayers[item][staticLayer].layer[0]
                    t['title'] = 'basemap'
                    lBasemap.push(t)
                } else if (item == "static") {
                    let t = organizedLayers[item][staticLayer].layer[0]
                    t['title'] = 'static'
                    lStatic.push(t)
                }
            }
            layersGroupStatic[0] = new LayerGroup({
                layers: lStatic,
                visible:true,
                opacity:1
            })
            layersGroupBasemap[0] = new LayerGroup({
                layers: lBasemap,
                visible:true,
                opacity:1
            })

        }
    }
    groups['basemap'] = layersGroupBasemap
    groups['static'] = layersGroupStatic
    groups['time'] = layersGroup
    return groups //[basemaps,static,time]
}

function plotData(arr_data) {
    // Remove previous plot
    var div = document.querySelector('.metric-chart');
    try {
        div.remove()
    } catch (error) {
        // console.warn('no chart');
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
    // Resolve requests and print the plot
    Promise.all(arr_data['values']).then((values) => {
        tsPlot(values,arr_data['typology'])
    });
}

export {
    getLayersWMS,
    organizeLayers,
    createTileWMS,
    basemapLayers,
    createLayerGroups,
    plotData
}