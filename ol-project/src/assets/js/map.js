import '../css/style.css';
import {MenuControl,
        LayersControl,
        MetadataControl,
        TimeControl,
        BaseMapControl,
        PlotControl} from '../../components/controls';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { OverviewMap,ScaleLine,FullScreen, defaults as defaultControls} from 'ol/control';

const logoSimile = new Overlay({
  element: document.getElementById('interregSimile'),
});

const osm = new OSM();

const overviewMapControl = new OverviewMap({
  layers: [
    new TileLayer({
      source: osm,
    }),
  ],
});

const map = new Map({
  target: 'map',
  controls: defaultControls()
              .extend([new FullScreen(),
                       new ScaleLine(),
                       overviewMapControl,
                       new MenuControl(),
                       new LayersControl(),
                       new MetadataControl(),
                       new TimeControl(),
                       new BaseMapControl(),
                       new PlotControl(),
              ]),
  overlays: [
    logoSimile,
  ],
  layers: [
    new TileLayer({
      source: osm,
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

map.addOverlay(logoSimile);