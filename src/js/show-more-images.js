import sendRequest from "./fetch.js";
import displayPhotos from "./display-photos.js";

const requestPhotosURL = "https://jsonplaceholder.typicode.com/albums/1/photos";

function showMoreImages() {
  const DOMButtonGallery = document.getElementById('js-button-gallery');

  if (!DOMButtonGallery) {
    throw new Error(`Element ${DOMButtonGallery} is absent`);
  }

  let loading = false,
    imagesUrl = [],
    currentIndex = 0;

  DOMButtonGallery.addEventListener('click', function (e) {
    e.preventDefault();

    if (!loading) {

      loading = true;

      sendRequest(requestPhotosURL)
        .then(data => {
          imagesUrl = data.map(obj => obj.url);
          //console.log(imagesUrl);
          displayPhotos(imagesUrl, currentIndex);

          currentIndex += 5;
        })
        .catch(err => console.log(err));
    } else {
      if (currentIndex < imagesUrl.length) {
        displayPhotos(imagesUrl, currentIndex);

        currentIndex += 5;

      } else {
        DOMButtonGallery.classList.add('hidden')
      }
    }
  });
}

export default showMoreImages;