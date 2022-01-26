import {MenuControl,
		LayersControl,
		MetadataControl,
		TimeControl,
		BaseMapControl,
		PlotControl,
		SlideControl,
		SocialControl,
		AboutControl,
		ProjectLogo} from 'js/controlCreate';
import {layerPanel,
		metadataPanel,
		timePanel,
		basemapPanel,
		plotPanel,
		slidePanel,
		popup} from 'js/panelCreate';
import {Map, View} from 'ol';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat, toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import Stamen from 'ol/source/Stamen';
import { OverviewMap,ScaleLine, FullScreen, defaults as defaultControls} from 'ol/control';
import { getMapboxPath } from 'ol/layer/MapboxVector';

// Basemaps Layers Group


const osm = new OSM();

const overviewMapControl = new OverviewMap({
layers: [
	new TileLayer({
	source: osm
	}),
],
});

function addMap() {
	const map = new Map({
		target: 'map',
		// TODO: Define controllers panel as constructors to make them native components to the OL map object
		controls: defaultControls()
					.extend([new ScaleLine(),
							// new FullScreen(),
							overviewMapControl,
							new MenuControl(),
							new LayersControl(),
							// layerPanel,
							new MetadataControl(),
							// metadataPanel,
							new TimeControl(),
							// timePanel,
							new BaseMapControl(),
							// basemapPanel,
							new PlotControl(),
							// plotPanel,
							// slidePanel,
							new SlideControl(),
							new SocialControl(),
							new AboutControl(),
							new ProjectLogo(),
					]),
		view: new View({
			center: [994904.360160,5775887.605341],
			zoom: 10
		})
	});
	return map
}


export {
	addMap,
}

