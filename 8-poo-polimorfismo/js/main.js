import ImageCat from "./classes/ImageCat.mjs";
import ImageDog from "./classes/ImageDog.mjs";

const imageCat = new ImageCat(
  "http://placekitten.com/g/300/200",
  "imagem de gato",
  "aqui é um felino!"
);
const imageDog = new ImageDog(
  "https://place.dog/300/200",
  "imagem de cachorro",
  "aqui é um dog!"
);

const container = document.getElementById("image-container");
container.appendChild(imageCat.createElement());
container.appendChild(imageDog.createElement());
container.appendChild(imageCat.createElementWithEventClick());
container.appendChild(imageDog.createElementWithEventClick("teste dog!"));

console.log(imageDog.showMessage());
console.log(imageCat.showMessage());
