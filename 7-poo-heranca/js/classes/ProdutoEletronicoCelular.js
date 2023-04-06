import ProdutoEletronico from "./ProdutoEletronico.js";

export default class ProdutoEletronicoCelular extends ProdutoEletronico {
    constructor(nome, valor, peso, marca){
        super(nome, valor, peso);
        this.marca = marca;
    }

    mostrarDescricao(){
        return `${super.mostrarDescricao()} - Marca ${this.marca}`
    }

    calcularImpostoVenda(){
        return `Imposto de venda: R$ ${(this.valor*0.05).toFixed(2)}`
    }
}
