function displayPhotos(list) {
  const DOMGallery = document.getElementById('js-gallery-images');

  if (!DOMGallery) {
    throw new Error(`Element  is absent`);
  }

  list.forEach((url) => {
    const divElement = document.createElement('div');

    divElement.classList.add('image-item');

    const imgElement = document.createElement('img');

    imgElement.src = url;

    imgElement.alt = 'Image';

    DOMGallery.appendChild(imgElement);
  });
}

export default displayPhotos;
