
export const makePopupFilled = (object) => {
  const popup = document.querySelector('#card').content.querySelector('.popup');
  const balloon = popup.cloneNode(true);

  let offerType = '';
  switch(object.offer.type) {
    case 'palace':
      offerType = 'дворец';
      break;

    case 'flat':
      offerType = 'квартира';
      break;

    case 'house':
      offerType = 'дом';
      break;

    case 'bungalow':
      offerType = 'бунгало';
      break;

    case 'hotel':
      offerType = 'отель';
      break;
  }

  const hasValue = (name, property, value) => {
    const element = balloon.querySelector(name);
    if (property) {
      element.textContent = value;
    } else {
      element.remove();
    }
  };

  const saveOnlyRealFeature = (features, element) => {
    if (object.offer.features) {
      const fullFeaturesNames = features.map((feature) => `popup__feature--${feature}`);
      const allFeatures = element.querySelector('.popup__features').querySelectorAll('.popup__feature');
      allFeatures.forEach((feature) => {
        const modifier = feature.classList[1];

        if (!fullFeaturesNames.includes(modifier)) {
          feature.remove();
        }
      });
    } else {
      element.querySelector('.popup__features').classList.add('visually-hidden');
    }
  };

  const loadPhotos = (element, photos) => {
    const photosContainer = element.querySelector('.popup__photos');
    if(photos) {
      photos.forEach((photo) => {
        const photoTemplate = photosContainer.querySelector('.popup__photo').cloneNode(true);
        photoTemplate.src = photo;
        photosContainer.appendChild(photoTemplate);
      });
    } else {
      photosContainer.classList.add('visually-hidden');
    }
    photosContainer.querySelector('.popup__photo').remove();
  };

  hasValue('.popup__title', object.offer.title, object.offer.title);
  hasValue('.popup__text--address', object.offer.address, object.offer.address);
  hasValue('.popup__text--price', object.offer.price, `${object.offer.price} ₽/ночь`);
  hasValue('.popup__type', object.offer.type, offerType);
  hasValue('.popup__text--capacity', object.offer.guests, `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`);
  hasValue('.popup__text--time', object.offer.checkin, `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`);
  hasValue('.popup__description', object.offer.description, object.offer.description);
  saveOnlyRealFeature(object.offer.features, balloon);
  loadPhotos(balloon, object.offer.photos);
  if(object.author.avatar) {
    balloon.querySelector('.popup__avatar').src = object.author.avatar;
  } else {
    balloon.querySelector('.popup__avatar').remove();
  }

  return balloon;
};
