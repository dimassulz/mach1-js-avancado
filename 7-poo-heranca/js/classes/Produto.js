export default class Produto {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }

  mostrarDescricao() {
    return `${this.nome} - Valor: R$ ${this.valor}`;
  }

  calcularMargemDeRevenda() {
    throw new Error("Esse método está em construção!");
  }
}
