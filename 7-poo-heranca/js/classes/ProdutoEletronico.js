import Produto from "./Produto.js";

export default class ProdutoEletronico extends Produto {
  constructor(nome, valor, peso) {
    super(nome, valor);
    this.peso = peso;
  }

  mostrarDescricao() {
    return `${super.mostrarDescricao()} - Peso: ${this.peso} kg`
  }
}
