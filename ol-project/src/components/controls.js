import 'ol/ol.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {Control} from 'ol/control';

/* MENU CONTROL */ 
class MenuControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-list"></i>';

    const element = document.createElement('div');
    element.className = 'show-burger ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}

/* LIST PANEL CONTROL */ 
class LayersControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-stack"></i>';

    const element = document.createElement('div');
    element.className = 'show-layers ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });

    // button.addEventListener('click', this.handleRotateNorth.bind(this), false);
  }

  // handleRotateNorth() {
  //   // this.getMap().getView().setRotation(0);
  //   console.log("Hello bruh")
  // }
}

/* METADATA PANEL CONTROL */
class MetadataControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-info-square"></i>';

    const element = document.createElement('div');
    element.className = 'show-metadata ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}

/* TIME PANEL CONTROL */
class TimeControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-clock-history"></i>';

    const element = document.createElement('div');
    element.className = 'show-time ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}

/* BASEMAP PANEL CONTROL */
class BaseMapControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-map"></i>';

    const element = document.createElement('div');
    element.className = 'show-basemap ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}

/* PLOT PANEL CONTROL */
class PlotControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-graph-up"></i>';

    const element = document.createElement('div');
    element.className = 'show-plot ol-unselectable ol-control control-bar';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}


export {MenuControl, LayersControl, MetadataControl, TimeControl, BaseMapControl, PlotControl}