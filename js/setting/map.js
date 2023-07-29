import {toggleForm, toggleMapFilter} from './toggle_status.js';
import {makePopupFilled} from './popup.js';
import {getData} from './api.js';
import {MAX_BALLOONS_IN_MAP} from './data.js';
import {getFilteredByAll} from './filter.js';
import {debounce} from './util.js';

const RENDERER_DELAY = 500;

const addressField = document.querySelector('#address');

export const map = L.map('map-canvas')
  // .on('load', toggleForm())
  // .on('load', toggleMapFilter())
  .setView({
    lat: 50.45466,
    lng: 30.5238
  }, 10);
toggleForm();

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Задаем иконки:
const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

export const usualIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

//Задаем маркеры:
const mainMarker = L.marker(
  {
    lat: 50.45466,
    lng: 30.5238
  },
  {
    draggable: true,
    icon: mainIcon
  }
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

export const renderBalloons = (objects) => {
  // console.log("objects", objects);
  objects
    .slice()
    .filter(getFilteredByAll)
    .slice(0, MAX_BALLOONS_IN_MAP)
    .forEach((object) => {
      const usualMarker = L.marker(
        {
          lat: object.location.lat,
          lng: object.location.lng
        },
        {
          icon: usualIcon
        }
      );

      usualMarker
        .addTo(markerGroup)
        .bindPopup(makePopupFilled(object));
    });
};

export const resetMap = () => {
  mainMarker.setLatLng({
    lat: 50.45466,
    lng: 30.5238
  });
  map.setView({
    lat: 50.45466,
    lng: 30.5238
  }, 10);
  map.closePopup();
};


getData(renderBalloons);

const showFilteredBalloons = () => {
  markerGroup.clearLayers();
  getData(renderBalloons);
};


document.querySelectorAll('.keks-map__filter').forEach((filter) => {
  filter.addEventListener('change', debounce(
    () => showFilteredBalloons()
  ), RENDERER_DELAY);
});

document.querySelectorAll('.keks-map__checkbox').forEach((feature) => {
  feature.addEventListener('change', debounce(
    () => showFilteredBalloons()
  ), RENDERER_DELAY);
});

