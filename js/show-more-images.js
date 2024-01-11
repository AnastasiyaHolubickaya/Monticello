import displayPhotos from './display-photos.js';

const generateUrl = (page) =>
  `https://jsonplaceholder.typicode.com/albums/1/photos?_limit=4&_page=${page}`;

function showMoreImages() {
  const DOMButtonGallery = document.getElementById('js-button-gallery');

  if (!DOMButtonGallery) {
    throw new Error(`Element ${DOMButtonGallery} is absent`);
  }

  let loading = false,
    page = 1;

  DOMButtonGallery.addEventListener('click', function () {
    if (!loading) {
      loading = true;

      fetch(generateUrl(page))
        .then((response) => response.json())
        .then((data) => {
          if (!data.length) {
            return DOMButtonGallery.classList.add('hidden');
          }
          displayPhotos(data.map((item) => item.url));
          page++;
          loading = false;
        });
    }
    if (page === 12) DOMButtonGallery.classList.add('hidden');
  });
}

export default showMoreImages;
