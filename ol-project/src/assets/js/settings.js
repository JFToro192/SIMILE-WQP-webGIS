"use strict";

const settings = {
    urlWMS: "http://127.0.0.1/geoserver/geonode/wms",
    urlWMSget: "http://127.0.0.1/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
    typology:{
        CHL:{
            title:"Chlorophyll-a",
            abstract:"Chlorophyll-a allows plants to photosintezise. This measurement is used to classify the trophic conditionof a water body. The Chlorophyll-a maps presented have been processed using the Sentinel-3 OLCI sensor",
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
        {title:"Welcome!",src:"i1.png",description:"1. SIMILE WebGIS enables the visualization of the water quality parameters (WQPs) maps produced for Lakes Maggiore, Lugano and Como."},
        {title:"Explore the different tools",src:"i2.png",description:"2. The WebGIS presents multtiple panels allowing to explore the different water quality parameters maps"},
        {title:"Visualize and explore the WQP",src:"i3.png",description:"3. Review the different components allowing the visualization of the maps, such as the layer panel, metadata panel and time controller"},
        {title:"Observe the evolution of the time series",src:"i4.png",description:"4. Use the time manager to observe the changes of the parameters in time."},
        {title:"Observe the evolution of the time series",src:"i5.png",description:"4. Use the time manager to observe the changes of the parameters in time."},
        {title:"Change the basemap",src:"i6.png",description:"5. Customize the view of the WebGIS by using different basemaps"},
        {title:"Explore the guide",src:"i7.png",description:"6. Review the guide for the WebGIS"},
    ]
}

export {
    settings
}