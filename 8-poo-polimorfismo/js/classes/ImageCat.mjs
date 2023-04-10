import Image from "./Image.mjs";

export default class ImageCat extends Image {
  constructor(url, altText, message) {
    super(url, altText, message);
  }

  showMessage(){
    return `${super.showMessage()} - Aqui na mensagem do GATO`
  }
}
