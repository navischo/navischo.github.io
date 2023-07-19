import { saveDataLocally, sendData} from './api.js';
import {resetMap} from './map.js';
import {clearFilter} from './filter.js';
import {isEscapeKey} from './util.js';
import {resetSlider} from './slider.js';
import {closePopup} from "../popup/dom.popup.jquery.js";

const bodyNode = document.body;
const offerForm = document.querySelector('.ad-form');
const submitButtonForm = document.querySelector('.ad-form__submit');
const successMessageForm = document.querySelector('#success').content.querySelector('.success');
const errorMessageForm = document.querySelector('#error').content.querySelector('.error');
const resetButtonForm = document.querySelector('.ad-form__reset');


export const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
}, true);


const GUESTS_FOR_ROOMS = {
  1: ['1', '2', '3'],
  2: ['2', '3'],
  3: ['3'],
  0: ['100']
};

export const MIN_PRICES_FOR_TYPES = {
  'street': 100,
  'factory': 100,
  'loft': 200,
  'bar': 300,
  'club': 400,
  'studio': 500,
  'palace': 600
};

//Находим нужные поля:
const titleField = document.querySelector('#title');
export const priceField = document.querySelector('#price');
const roomsNumber = document.querySelector('#room_number');
const placesNumber = document.querySelector('#capacity');
export const typeField = document.querySelector('#type');
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');


//Функции валидации:
const validateTitle = () => titleField.value.length >= 10 && titleField.value.length <= 100;
const validatePrice = () => priceField.value >= MIN_PRICES_FOR_TYPES[typeField.value] && priceField.value <= 100000;

//Генерируем сообщение об ошибке:

const priceErrorMessage = () => `Не менше ${MIN_PRICES_FOR_TYPES[typeField.value]} и не більше 100000`;

//Добавляем валидаторы:
pristine.addValidator(
  titleField,
  validateTitle,
  'Від 10 до 100 символів'
);

pristine.addValidator(
  priceField,
  validatePrice,
  priceErrorMessage
);


//Функции, которая запускают валидацию:
const onTitleChange = () => {
  pristine.validate(titleField);
};


const onPriceChange = () => priceField.value && pristine.validate(priceField);


const getPlaceholderValue = () => {
  priceField.placeholder = MIN_PRICES_FOR_TYPES[typeField.value];
};

const makeTimeOutToTimeIn = () => {
  timeOutField.value = timeInField.value;
};

const makeTimeInToTimeOut = () => {
  timeInField.value = timeOutField.value;
};

//Вешаем обработчик, который следит за изменениями в форме, и когда они происходят, запускает валидацию:
titleField.addEventListener('change', onTitleChange);
typeField.addEventListener('change', getPlaceholderValue);
priceField.addEventListener('change', onPriceChange);
typeField.addEventListener('change', onPriceChange);
timeInField.addEventListener('change', makeTimeOutToTimeIn);
timeOutField.addEventListener('change', makeTimeInToTimeOut);


const hideInvalidRoomsValues = () => {
  roomsNumber.value = GUESTS_FOR_ROOMS[placesNumber.value][0];
  for (const roomNumber of roomsNumber.querySelectorAll('option')) {
    roomNumber.disabled = !GUESTS_FOR_ROOMS[placesNumber.value].includes(roomNumber.value);
  }
};


placesNumber.addEventListener('change', hideInvalidRoomsValues);

const makeSubmitButtonDisabled = () => {
  submitButtonForm.disabled = true;
  submitButtonForm.textContent = 'Выполняю...';
};

const makeSubmitButtonEnabled = () => {
  submitButtonForm.disabled = false;
  submitButtonForm.textContent = 'Опубликовать';
};

const clearForm = () => {
  offerForm.reset();
};

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    successMessageForm.remove();
    errorMessageForm.remove();
    window.removeEventListener('keydown', onMessageEscKeydown);
  }
};

const showSubmitFormMessage = (message) => {
  bodyNode.append(message);
  window.addEventListener('keydown', onMessageEscKeydown);
  window.onclick = () => message.remove();
};

const getSuccessfullSending = () => {
  clearForm();
  resetMap();
  clearFilter();
  resetSlider();
  showSubmitFormMessage(successMessageForm);
  makeSubmitButtonEnabled();
};

const getSuccessfullLocalSave = () => {
  clearForm();
  resetMap();
  clearFilter();
  showSubmitFormMessage(successMessageForm);
  makeSubmitButtonEnabled();
  closePopup();
};

const getFailureSending = () => {
  showSubmitFormMessage(errorMessageForm);
  makeSubmitButtonEnabled();
};

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const isValid = pristine.validate();
  if(isValid) {
    makeSubmitButtonDisabled();
    saveDataLocally(evt.target);
    // sendData(getSuccessfullSending, getFailureSending, formData);
  }
});

resetButtonForm.onclick = () => {
  clearForm();
  resetMap();
  clearFilter();
  resetSlider();
};

export { getSuccessfullSending, getSuccessfullLocalSave };


