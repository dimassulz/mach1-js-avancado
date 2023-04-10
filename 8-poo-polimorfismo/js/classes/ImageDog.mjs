import Image from "./Image.mjs";

export default class ImageDog extends Image {
  constructor(url, altText, message) {
    super(url, altText, message);
  }
  createElementWithEventClick(message) {
    this.message = message;
    const imgElement = this.createElement();
    imgElement.addEventListener("click", () => {
      console.warn("chegou no evento do Dog");
      alert(this.message);
    });
    return imgElement;
  }
}
