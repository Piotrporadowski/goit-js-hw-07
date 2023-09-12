import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(item => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
       <img
        class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
         alt="${item.description}"
       />
     </a>
   </li>`;
  })
  .join('');

galleryList.innerHTML = galleryElements;

galleryList.addEventListener('click', selectImage);

function selectImage(eventImage) {
  eventImage.preventDefault();
  if (eventImage.target.nodeName !== 'IMG') {
    return;
  }
  const selectedImage = eventImage.target.dataset.source;
  const openedImage = basicLightbox.create(`<img src="${selectedImage}">`);
  openedImage.show();

  document.addEventListener('keydown', escapePress);
  function escapePress(eventKey) {
    if (eventKey.code === 'Escape') {
      openedImage.close();
      document.removeEventListener('keydown', escapePress);
    }
  }
}