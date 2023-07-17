import {MIN_PRICES_FOR_TYPES, typeField, priceField, pristine} from './form.js';

const slider = document.querySelector('.ad-form__slider');

noUiSlider.create(slider, {
  range: {
    min: 100,
    max: 10000
  },
  start: 200,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

slider.noUiSlider.on('update', () => {
  priceField.value = slider.noUiSlider.get().toFixed(0);
  pristine.validate(priceField);
});

typeField.addEventListener('change', () => {
  slider.noUiSlider.updateOptions({
    start: MIN_PRICES_FOR_TYPES[typeField.value]
  });
});

priceField.addEventListener('change', () => {
  slider.noUiSlider.updateOptions(
    slider.noUiSlider.set(priceField.value)
  );
});

export const resetSlider = () => {
  slider.noUiSlider.updateOptions(
    slider.noUiSlider.set(1000)
  );
};
