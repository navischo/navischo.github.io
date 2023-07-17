const avatarPhotoInput = document.querySelector('.ad-form-header__input');
const avatarPhotoPlace = document.querySelector('.ad-form-header__preview').querySelector('img');
const offerPhotoForm = document.querySelector('.ad-form__input');
const offerPhotoFormPreview = document.querySelector('.ad-form__photo');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

avatarPhotoInput.addEventListener('change', () => {
  const file = avatarPhotoInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    avatarPhotoPlace.src = URL.createObjectURL(file);
  }
});

offerPhotoForm.addEventListener('change', () => {
  const files = offerPhotoForm.files;

  for(const file of files) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.width = '100px';
    img.style.height = '75px';
    offerPhotoFormPreview.append(img);
  }
});
