const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let read = false;
let imagesCount = 0;
let totalImages = 0;


const count = 10;

// Private key
const apiKey = 'koSAIlDETPXZDYvsztnknRYZDtu73TJvuS8FrH6MFfw';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function setAttributes(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}


function imageLoaded(){
    imagesCount++;
    if (imagesCount === totalImages){
        ready = true;
        loader.hidden = true;
    }
}


function displayPhotos() {
    imagesCount = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo)=> {
        const item = document.createElement('a');

        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');

        setAttributes(img, {
            src: photo.urls.regular
        });

        if (photo.alt_description){

            setAttributes(img, {
                alt: photo.alt_description, 
                title: photo.alt_description
            });
        }
        else {
            setAttributes(img, {
                alt: 'Image from Unsplash API'
            })
        }

        img.addEventListener('load', imageLoaded)

        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    }
    catch(error){
        console.log(error);
    }
}

window.addEventListener('scroll', () => {
    
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
});




getPhotos()
