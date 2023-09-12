import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

const galleryElements = [];
galleryItems.forEach(item => {
  const element = `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`;
  galleryElements.push(element);
});
listGallery.innerHTML = galleryElements.join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});