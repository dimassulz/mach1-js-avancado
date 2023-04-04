/**
 * POO - Programação Orientada a Objetos
 * Abstração -> Separar responsabilidades, template #HOJE
 * Herança -> Herdar um elemento (classe)
 * Polimorfismo -> Sobrescrever e sobrecarregar um método
 * Encapsulamento -> Propriedades e metodos (privados)
 */

const nome = "João Feliz";
const idade = 45;
const pessoa = {
  nome: "João",
  sobrenome: "Feliz",
  dataNascimento: new Date("1990-3-3"),
};
//pessoa.Statuss = 'true';

console.log(pessoa);

const pessoa2 = {
  nome: "Maria",
  sobrenome: "Feliz",
  dataNascimento: new Date("1995-6-3"),
};

//pessoa2.status = false;

console.log(pessoa2);

class Pessoa {
  nome = "";
  sobrenome = "";
  dataNascimento = "";
  status = true;
}

const objPessoa = new Pessoa(); //instaciando a classe Pessoa -> objPessoa
objPessoa.nome = "Jorge";
objPessoa.sobrenome = "2";
objPessoa.dataNascimento = new Date("2000-1-1");
console.log(objPessoa);

const objPessoa2 = new Pessoa();
objPessoa2.nome = "Fernando";
objPessoa2.sobrenome = "3";
objPessoa2.dataNascimento = new Date("2002-2-2");
//objPessoa2.status = false;
console.log(objPessoa2);

let listaDePessoas = [];

function adicionarPessoas(pessoa) {
  if (pessoa instanceof Pessoa) {
    listaDePessoas.push(pessoa);
  } else {
    throw new Error("Adicione pessoas da classe de Pessoa");
  }
}

adicionarPessoas(objPessoa);
adicionarPessoas(objPessoa2);
//adicionarPessoas(pessoa); //erro
console.log(listaDePessoas);

//CONSTRUCTOR 
//readonly
class Usuario {
    #login; //declarando a variavel login como privada
    #senha; //declarando a varaivel senha como privada
    constructor(login, senha) {
        if(!login || !senha) throw new Error('Insira os dados do construtor')
        this.#login = login;
        this.#senha = senha;
    }

    //getters e setters
    get login() { //buscar
        return `Seu login é ${this.#login}`
    }

    // set login(valor){ //modifica
    //     this.#login = `teste_modificado_${valor}`
    // }

    verificarSenha(){
        return true;
    }

    mostrarSenha() {
        return `Sua senha é ${this.#senha}`
    }
  }

  const objUsuario = new Usuario('admin', 'senha123');
  const objUsuario2 = new Usuario('root', 'senha433');
  const objUsuario3 = new Usuario('master', 'senha43');
  const objUsuario4 = new Usuario('user', 'senha44');
  const objUsuario5 = new Usuario('user', 'senha123');
  objUsuario.login = 'set_login';
  console.log(objUsuario);
  console.log(objUsuario.verificarSenha());
  console.log(objUsuario.mostrarSenha());
  console.log(objUsuario2);
  console.log(objUsuario3);
  console.log(objUsuario4);