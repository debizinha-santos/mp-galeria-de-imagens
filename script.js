import { images } from './dados.js';
const galleryContainer = document.querySelector('#gallery-container');
const loadMore= document.querySelector('#load-more');
const imagesPerPage = 4;
let currentImageIndex = 0;


function loadImages () {
    const pageImages =  images.slice(currentImageIndex, currentImageIndex + imagesPerPage);


    pageImages.forEach( images => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${images.wide ? 'wide' : ''}`;

        console.log(images.wide);

        const imgItem = document.createElement('img');
        imgItem.src = images.src;
        imgItem.alt = images.alt;


        galleryItem.appendChild(imgItem);// Add the image to the gallery item
        galleryContainer.appendChild(galleryItem);// Add the gallery item to the container
        
    });

    currentImageIndex += imagesPerPage;

    if (currentImageIndex >= images.length) {
        loadMore.style.display = 'none';
    }
}

loadImages();
loadMore.addEventListener('click', loadImages);

window.addEventListener('scroll', () => {
    console.log('teste');

    const viewportHeight = window.innerHeight;

    const scrollPosition = window.scrollY;

    const pageHeight = document.body.offsetHeight;

    const offset = pageHeight -  100;

    if (viewportHeight + scrollPosition >= offset) {
        loadImages();
    }
});