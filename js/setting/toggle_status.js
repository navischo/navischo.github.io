//меняем состояние формы
const newOfferForm = document.querySelector('.ad-form');
const interactiveFormElements = document.querySelectorAll('.ad-form__element');
const formHeader = document.querySelector('.ad-form-header');

export const toggleForm = () => {
  newOfferForm.classList.toggle('ad-form--disabled');

  interactiveFormElements.forEach((element) => {
    element.disabled = !element.disabled;
  });
  formHeader.disabled = !formHeader.disabled;
};

//меняем состояние фильтра
const mapFilters = document.querySelector('.keks-map__filters');
const filterTypes = mapFilters.children;

export const toggleMapFilter = () => {
  for(const filter of filterTypes) {
    filter.disabled = !filter.disabled;
  }
  mapFilters.classList.toggle('keks-map__filters--disabled');
};

toggleForm();
toggleMapFilter();
