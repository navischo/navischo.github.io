
import {showAlert} from './util.js';

export const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects);
    })
    .catch(() => {
      showAlert('Данные не загружены :(');
    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};
