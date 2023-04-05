class CaixaEletronico {
  #saldo;
  constructor(valorSaldo = 0) {
    this.#saldo = valorSaldo;
  }

  consultarSaldo() {
    return `O seu saldo atual é R$ ${this.#saldo}`;
  }

  depositarDinheiro(valor) {
    if (isNaN(valor)) {
      return `Valor inválido`;
    }
    if (valor <= 0) {
      return `Insira um valor maior que Zero (0)`;
    }
    this.#saldo += valor;
    return `O depósito de ${valor} realizado com sucesso!`;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return `O saque de ${valor} realizado com sucesso!`;
    } else {
      return `Saldo insuficiente para o saque`;
    }
  }
}
const objCaixaEletronico = new CaixaEletronico();
const objCaixaEletronico2 = new CaixaEletronico(5000);

console.log(objCaixaEletronico.consultarSaldo());
console.log(objCaixaEletronico.depositarDinheiro(25));
console.log(objCaixaEletronico.depositarDinheiro(250));
console.log(objCaixaEletronico.depositarDinheiro(100));
console.log(objCaixaEletronico.depositarDinheiro(350));
console.log(objCaixaEletronico.consultarSaldo());

console.log(objCaixaEletronico.sacar(500));
console.log(objCaixaEletronico.sacar(300));
console.log(objCaixaEletronico.consultarSaldo());
