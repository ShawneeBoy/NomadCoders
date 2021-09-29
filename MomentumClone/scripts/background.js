const images = ["img/3.jpg",]

let currImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = currImage;
bgImage.classList.add("background");
document.body.appendChild(bgImage);