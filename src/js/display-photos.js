function displayPhotos(imageUrls, currentIndex) {
  const DOMGallery = document.getElementById('js-gallery-images');

  if (!DOMGallery) {
    throw new Error(`Element  is absent`);
  }
  if (!imageUrls.length) {
    throw  new Error('array is empty!')
  }

  const nextImages = imageUrls.slice(currentIndex, currentIndex + 5);

  nextImages.forEach((url) => {

    const divElement = document.createElement('div');

    divElement.classList.add('img-item');

    const imgElement = document.createElement('img');

    imgElement.src = url;
    //console.log(typeof url);
    imgElement.alt = 'Image';

    DOMGallery.appendChild(imgElement);
  });
}

export default displayPhotos;