import 'ol/ol.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Control} from 'ol/control';
import {openList} from '@/assets/js/controlFunctions'

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
    element.className = 'show-burger ol-unselectable ol-control control-bar active';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });

    element.addEventListener('click', openList.bind(this), false);
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

    button.title = 'layers panel';

    const element = document.createElement('div');
    element.className = 'show-layers ol-unselectable ol-control control-bar burger-item';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
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

    button.title = 'metadata panel';

    const element = document.createElement('div');
    element.className = 'show-metadata ol-unselectable ol-control control-bar burger-item';
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

    button.title = 'time panel';

    const element = document.createElement('div');
    element.className = 'show-time ol-unselectable ol-control control-bar burger-item';
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

    button.title = 'basemaps';

    const element = document.createElement('div');
    element.className = 'show-basemap ol-unselectable ol-control control-bar burger-item';
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

    button.title = 'plot time series';

    const element = document.createElement('div');

    element.className = 'show-plot ol-unselectable ol-control control-bar burger-item';
    element.appendChild(button);

    super({
      element: element,
      target: options.target,
    });
  }
}

/* SOCIAL MEDIA CONTROLS */ 
class SocialControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const list = document.createElement('ul');
    const item_main = document.createElement('li');
    const item_fb = document.createElement('li');
    const item_tw = document.createElement('li');
    const item_li = document.createElement('li');
    const item_ig = document.createElement('li');
    item_main.innerHTML = '<button><i class="bi bi-people"></i></button>';
    item_fb.innerHTML = '<button class="social-item" style="display:none;"><i class="bi bi-facebook"></i></button>';
    item_tw.innerHTML = '<button class="social-item" style="display:none;"><i class="bi bi-twitter"></i></button>';
    item_li.innerHTML = '<button class="social-item" style="display:none;"><i class="bi bi-linkedin"></i></button>';
    item_ig.innerHTML = '<button class="social-item" style="display:none;"><i class="bi bi-instagram"></i></button>';

    item_main.title = 'social';
    item_fb.title = 'facebook';
    item_tw.title = 'twitter';
    item_li.title = 'linkedin';
    item_ig.title = 'instagram';


    const element = document.createElement('div');
    element.className = 'show-social ol-unselectable ol-control control-bar burger-item';
    list.appendChild(item_main);
    list.appendChild(item_fb);
    list.appendChild(item_tw);
    list.appendChild(item_li);
    list.appendChild(item_ig);
    element.appendChild(list);

    super({
      element: element,
      target: options.target,
    });

    item_main.addEventListener('click', openList.bind(this), false);
  }
}

/* ABOUT PROJECT CONTROLS */ 
class AboutControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const list = document.createElement('ul');
    const item_main = document.createElement('li');
    const item_news = document.createElement('li');
    const item_business = document.createElement('li');
    const item_gh = document.createElement('li');
    const item_calendar = document.createElement('li');
    item_main.innerHTML = '<button ><i class="bi bi-journals"></i></button>';
    item_news.innerHTML = '<button class="about-item" style="display:none;"><i class="bi bi-newspaper"></i></button>';
    item_business.innerHTML = '<button class="about-item" style="display:none;"><i class="bi bi-briefcase"></i></button>';
    item_gh.innerHTML = '<button class="about-item" style="display:none;"><i class="bi bi-github"></i></button>';
    item_calendar.innerHTML = '<button class="about-item" style="display:none;"><i class="bi bi-calendar-week"></i></button>';

    item_main.title = 'portfolio';
    item_news.title = 'news';
    item_business.title = 'business intelligence platform';
    item_gh.title = 'webgis github repository';
    item_calendar.title = 'calendar';


    const element = document.createElement('div');
    element.className = 'show-about ol-unselectable ol-control control-bar burger-item';
    list.appendChild(item_main);
    list.appendChild(item_news);
    list.appendChild(item_business);
    list.appendChild(item_gh);
    list.appendChild(item_calendar);
    element.appendChild(list);

    super({
      element: element,
      target: options.target,
    });

    item_main.addEventListener('click', openList.bind(this), false);
  }
}

/* STATIC PROJECT LOGO */ 
class ProjectLogo extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {};

    const div = document.createElement('div');
    div.innerHTML = '<a href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe"><img src="src/assets/img/assev_simile.png" alt="logo-interreg-simile"></a>';

    const element = document.createElement('div');
    element.className = 'project-logo ol-unselectable ol-control';
    element.appendChild(div);

    super({
      element: element,
      target: options.target,
    });
  }
}


export {MenuControl, 
        LayersControl, 
        MetadataControl, 
        TimeControl, 
        BaseMapControl, 
        PlotControl,
        SocialControl,
        AboutControl,
        ProjectLogo
      }