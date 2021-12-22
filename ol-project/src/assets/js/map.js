import {MenuControl,
        LayersControl,
        MetadataControl,
        TimeControl,
        BaseMapControl,
        PlotControl,
        SocialControl,
        AboutControl,
        ProjectLogo} from 'js/controlCreate';
import {layerPanel,
        metadataPanel,
        timePanel,
        basemapPanel,
        plotPanel,
        popup} from 'js/panelCreate';
import {Map, View} from 'ol';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat, toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import Stamen from 'ol/source/Stamen';
import { OverviewMap,ScaleLine, FullScreen, defaults as defaultControls} from 'ol/control';

const osm = new OSM();

const overviewMapControl = new OverviewMap({
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'watercolor',
      }),
    }),
  ],
});

const map = new Map({
  target: 'map',
  controls: defaultControls()
              .extend([new ScaleLine(),
                       new FullScreen(),
                       overviewMapControl,
                       new MenuControl(),
                       new LayersControl(),
                       layerPanel,
                       new MetadataControl(),
                       metadataPanel,
                       new TimeControl(),
                       timePanel,
                       new BaseMapControl(),
                       basemapPanel,
                       new PlotControl(),
                       plotPanel,
                       new SocialControl(),
                       new AboutControl(),
                       new ProjectLogo(),
              ]),
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'watercolor',
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
