export default class Image {
  constructor(url, altText = "", message = "") {
    this.url = url;
    this.altText = altText;
    this.message = message;
  }

  createElement() {
    const img = document.createElement("img");
    img.src = this.url;
    img.alt = this.altText;
    return img; //Node Element
  }

  createElementWithEventClick() {
    const imgElement = this.createElement();
    imgElement.addEventListener("click", () => alert(this.message));
    return imgElement;
  }

  showMessage(){
    return `${this.message}`;
  }
}
