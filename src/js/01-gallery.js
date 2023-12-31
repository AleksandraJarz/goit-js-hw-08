import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    image => `
  <a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', markup);

const galleryImages = document.querySelectorAll('.gallery__item');

new SimpleLightbox(galleryImages, {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
