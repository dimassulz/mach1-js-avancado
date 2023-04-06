import Produto from "./Produto.js";

export default class ProdutoAlimento extends Produto {
  #codigoDeBarras;
  #validade;
  #ingredientes = [];
  constructor(nome, valor, perecivel, refrigerado, validade) {
    super(nome, valor);
    this.perecivel = perecivel;
    this.refrigerado = refrigerado;
    this.#validade = new Date(validade); //receber no padrao americado yyyy-m-d
  }

  mostrarDescricao() {
    return `${super.mostrarDescricao()} - Perecivel: ${
      this.perecivel
    } - Refrigerado: ${
      this.refrigerado
    } - Data de Validade: ${this.#validade.toLocaleDateString("pt-BR")} `;
  }

  get validade(){
    return `${this.#validade.toLocaleDateString("pt-BR")}`;
  }

  adicionarIngredientes(ingrediente) {
    this.#ingredientes.push(ingrediente);
  }

  mostrarIngredientes() {}
}
