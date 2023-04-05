class Modal {
  #id;
  constructor(id, conteudo) {
    this.#id = id;
    this.conteudo = conteudo;
  }
  //getter
  get id(){
    return this.#id;
  }
  //setter
  set id(novoValor){
    this.#id = novoValor;
  }

  show() {
    document.getElementById(this.#id).style.display = "block";
  }

  hide() {
    document.getElementById(this.#id).style.display = "none";
  }

  render(elementoDaTela) {
    //construindo o html da modal (não abre a modal)
    const modal = document.createElement("div");
    modal.id = this.#id;
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-content">
                                <span class="close">&times;</span>
                                <p>${this.conteudo}</p>
                            </div>
                        `;
    elementoDaTela.appendChild(modal);
    document
      .querySelector(".close")
      .addEventListener("click", () => this.hide());
  }
}

const objModal = new Modal("idQueEuQuiser", "Teste da modal");
const objModal2 = new Modal("idQueEuQuiser2", "Teste da modal");
objModal.render(document.querySelector("body"));
document.querySelector("#btn").addEventListener("click", () => objModal.show());
