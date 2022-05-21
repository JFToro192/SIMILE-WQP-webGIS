"use strict";

const settings = {
    urlWMS: "https://www.geonode.eo.simile.polimi.it/geoserver/geonode/wms",
    urlWMSget: "https://www.webgis.eo.simile.polimi.it/api/getLayers",
    urlWMSfeatureInfo: "https://www.webgis.eo.simile.polimi.it/api/getLayerInfo",
    typology:{
        CHL:{
            title:"Chlorophyll-a",
            abstract:"Chlorophyll-a allows plants to photosintezise. This measurement is used to classify the trophic condition of a water body. The Chlorophyll-a maps presented have been processed using the Sentinel-3 OLCI sensor",
            style:"chl",
            units: "mg/m3",
        },
        TSM:{
            title:"Total Suspended Matter",
            abstract:"Total suspended matter concentration",
            style:"tsm",
            units: "g/m3",
        },
        LSWT:{
            title:"Lake Surface Water Temperature",
            abstract:"Average lake surface temperature",
            style:"lswt",
            units: "°C",
        }   
    },
    basemaps: [
        //A single basemap should be set as visible
        {layer:'osm',source:'osm',src:'osm.png',active:true},
        // {layer:'watercolor',source:'stamen',src:'watercolor.png',active:false},
        {layer:'terrain',source:'terrain-labels',src:'terrain.png',active:false},
        {layer:'toner',source:'toner',src:'toner.png',active:false},
        {layer:'none',source:'none',src:'none.png',active:false},
    ],
    slides:[
        {
            title:"Welcome!",
            src:"i1.png",
            description:"1. SIMILE WebGIS enables the visualization of the water quality parameters (WQPs) maps produced for Lakes Maggiore, Lugano and Como.",
            details:"Explore the different panels available inside the toolbar menu"
        },
        {
            title:"Explore the different tools",
            src:"i2.png",
            description:"2. The WebGIS presents multiple panels allowing to explore the different water quality parameters maps",
            details:"(1) Layers Panel: The layers collections divide depending on the layers typologies; Each collection listed provide multiple options to control the layer (2) layer's visibility, (3) download the data, (4) access its metadata, and (5) control the layer opacity; The time series (collections) correspond to a group of layers from which it is possible to query datasets in time "
        },
        {
            title:"Visualize and explore the WQP",
            src:"i3.png",
            description:"3. Review the different components allowing the visualization of the maps, such as the layer panel, metadata panel and time controller",
            details:"In case of the time series, once set visible, this will activate the (1) Metadata and (2) Time Panels. In the (1) Metadata Panel you will find more information regarding the production of the maps. On the other hand, the (2) Time Panel will allow you to visualize the evolution of the active water quality parameter in time. Notice the timestamps are retrieved for the latest activated time series. The layers activation order will determine the layers overlay (the latest activated layer will be set on top)."
        },
        {
            title:"Observe the evolution of the time series",
            src:"i4.png",
            description:"4. Use the time manager to observe the changes of the parameters in time.",
            details:"Explore the available Water Quality Parameters Maps in time by searching for an specific date using the (1) dropdown list, or navigate through the dates using the (2) slider and (3) backwards/forwards controllers"
        },
        {
            title:"Observe the evolution of the time series",
            src:"i5.png",
            description:"5. Example time manager use for observing the changes of the parameters in time.",
            details:""
        },
        {
            title:"Change the basemap",
            src:"i6.png",
            description:"6. Customize the view of the WebGIS by using different basemaps",
            details:"Use the (1) Basemaps Panel to change the background map"
        },
        {
            title:"Query values from the layers",
            src:"i7.png",
            description:"7. Extract point values from the currently active layer",
            details:"Once a time series is active, it is possible to query the estimates of the Water Quality Parameters maps by clicking on layers. Here, you will find information about the WQP layer name, estimate value and location."
        },
        {
            title:"Review the evolution of the WQP at a point",
            src:"i8.png",
            description:"8. Plot time series of the estimates for a WQP at a point",
            details:"By clicking on a map, you will also be able to explore the evolution of the estimates by activating the (1) Plot Panel. The Plot Panel presents a dynamic graph were you can review the complete time series at a point, or clip the estimates according to the (2) range that can be edited in the subplot. Alternatively, you can clip the data by limiting the plot to a (3) month, or year (depending on the lenght of the time series, or return to the complete plot for the time series by clicking on (4) data. Note: the plot is presented for the latest activated layer (either from the Layer or Time Panels)"
        },
        // {
        //     title:"Review the evolution of the WQP at a point",
        //     src:"i9.png",
        //     description:"9. Plot time series of the estimates for a WQP at a point",
        //     details:"By clicking on a map, you will also be able to explore the evolution of the estimates by activating the (1) Plot Panel. The Plot Panel presents a dynamic graph were you can review the complete time series at a point, or clip the estimates according to the (2) range that can be edited in the subplot. Alternatively, you can clip the data by limiting the plot to a (3) month, or year (depending on the lenght of the time series, or return to the complete plot for the time series by clicking on (4) data"
        // },
    ]
}

export {
    settings
}