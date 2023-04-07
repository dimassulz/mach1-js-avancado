import Produto from "./classes/Produto.js";
import ProdutoAlimento from "./classes/ProdutoAlimento.js";
import ProdutoEletronico from "./classes/ProdutoEletronico.js";
import ProdutoEletronicoCelular from "./classes/ProdutoEletronicoCelular.js";

//PRODUTO RAIZ
const teclado = new Produto("Teclado Gamer", 250.99);
const copo = new Produto("Copo Stanley", 150);
//console.log(teclado);
console.log(teclado instanceof Produto);
console.log(teclado.mostrarDescricao());
console.log(copo.mostrarDescricao());

//PRODUTOS ELETRONICOS -> PRODUTO

const monitor = new ProdutoEletronico("AOC 23 polegadas", 1000, 1.2);
console.log(monitor instanceof ProdutoEletronico);
console.log(monitor.mostrarDescricao());

//PRODUTOS ELETRONICOS CELULAR -> PRODUTOS ELETRONICOS

const celular = new ProdutoEletronicoCelular(
  "Iphone 14 plus",
  6000,
  0.2,
  "Apple"
);
console.log(celular instanceof Produto);
console.log(celular.mostrarDescricao());
console.log(celular.calcularImpostoVenda());
//console.log(celular.calcularMargemDeRevenda()); //error

//PRODUTO ALIMENTO -> PRODUTO
const pizza = new ProdutoAlimento(
  "Pizza Muçarela",
  40,
  true,
  false,
  "2023-4-7"
);
console.log(pizza instanceof Produto);
console.log(pizza.mostrarDescricao());
