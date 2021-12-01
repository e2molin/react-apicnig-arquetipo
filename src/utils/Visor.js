import M from 'utils/Mapea';
import Utils from 'utils/Utils';
import LocalStorage from 'utils/LocalStorage';

import MAPA from 'static/img/mapa.png';
import IMAGEN from 'static/img/image.png';
import HIBRIDO from 'static/img/hibrido.png';

var ol;
//declare var PRECHARGED;
//declare var CONFIGURATIONS;

export let mapjs;


/**
 * TODO
 */
 export const initMap = (unblock, t, params) => {

  const lang = LocalStorage.getString('language') || 'es';
  console.log(lang)
  M.language.setLang(lang);
  let zoom = 5;
  let center = [-467062.8225, 4683459.6216];
  let mouseProjection = 'EPSG:4326';

  try {
    const arrayParams = params.split('&');
    arrayParams.forEach((param) => {
      if (param.indexOf('center') > -1) {
        const values = param.split('=')[1].split(',');
        center = [parseFloat(values[0]), parseFloat(values[1])];
      } else if (param.indexOf('zoom') > -1) {
        const value = param.split('=')[1];
        zoom = parseInt(value, 10);
      } else if (param.indexOf('srs') > -1) {
        const value = param.split('=')[1];
        mouseProjection = value;
      }
    });

    if (center[0] !== -17181.402054092905 && center[1] !== 4716045.89913776) {
      center = ol.proj.transform(center, mouseProjection, 'EPSG:3857');
    }
  } catch (err) {}



  mapjs = M.map({
    container: 'map', //id del contenedor del mapa
    controls: ['panzoom', 'scale*true', 'scaleline', 'rotate', 'location', 'backgroundlayers'],
    zoom: zoom,
    maxZoom: 20,
    minZoom: 4,
    center: center,
  });

  window.mapjs = mapjs;


};

export const getLayersNames = () => mapjs.getLayers().map(l => l.name);

export const isLoadedMap = () => mapjs !== undefined;