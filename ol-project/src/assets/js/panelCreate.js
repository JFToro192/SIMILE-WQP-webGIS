import Control from 'ol/control/Control';


const layerPanel = new Control({
  element: document.getElementById('layerPanel'),
});

const metadataPanel = new Control({
  element: document.getElementById('metadataPanel'),
});

const timePanel = new Control({
  element: document.getElementById('timePanel'),
});

const basemapPanel = new Control({
  element: document.getElementById('basemapPanel'),
});

const plotPanel = new Control({
  element: document.getElementById('plotPanel'),
});


const popup = new Control({
    element: document.getElementById('popup'),
  });


export {
    layerPanel,
    metadataPanel,
    timePanel,
    basemapPanel,
    plotPanel,
    popup,
}