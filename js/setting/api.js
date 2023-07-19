import { win77 } from "../dne-cli.js";
import { showAlert } from './util.js';
import { getSuccessfullLocalSave } from './form.js';
import { setSetting } from '../utils/setSetting.js';

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

export const saveDataLocally = (formNode) => {
    const settingObj = {
        title: formNode.querySelector("#title").value,
        executive: formNode.querySelector("#executive").value,
        sector: formNode.querySelector("#sector").value,
        point: formNode.querySelector("#point").value,
        dungeType: formNode.querySelector("#type").value,
        enterPrice: +formNode.querySelector("#price").value,
        roomNumber: +formNode.querySelector("#room_number").value,
        capacity: +formNode.querySelector("#capacity").value,
        timeIn: formNode.querySelector("#timein").value,
        timeOut: formNode.querySelector("#timeout").value,
        posterImg: formNode.querySelector("#avatar").value,
        additionalImg: formNode.querySelector("#images").value,
        description: formNode.querySelector("#description").value
    }
    console.log(`saveDataLocally()`, formNode, settingObj, win77);

    win77.setting = settingObj;

    if (win77.setting) {
        getSuccessfullLocalSave();
        setSetting(settingObj);
        // Отразить введенные данные в виде проекта
        // closePopup();
    }
};
