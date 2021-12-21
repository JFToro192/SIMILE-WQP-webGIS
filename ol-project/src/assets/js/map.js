import {MenuControl,
        LayersControl,
        MetadataControl,
        TimeControl,
        BaseMapControl,
        PlotControl,
        SocialControl,
        AboutControl,
        ProjectLogo} from 'js/controlCreate';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import {fromLonLat, toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import { OverviewMap,ScaleLine,FullScreen, defaults as defaultControls} from 'ol/control';

const logosimile = new Overlay({
  element: document.getElementById('interregsimile'),
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
                       new SocialControl(),
                       new AboutControl(),
                       new ProjectLogo(),
              ]),
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


const pos = fromLonLat([16.3725, 48.208889]);

