let x = 10;
function foo() {
  let x = 25;
  let y = 20;
  function bar() {
    let z = 15;
    return x + y + z;
  }
  return bar; // function bar()
}
const closureFoo = foo(); //function
console.log(closureFoo()); //45

let livro = "rapido e devagar";
function fnExterna() {
  let livro = "12 regras para vida";
  const fnInterna = () => {
    //let livro = "Harry Potter"
    return livro.toUpperCase();
  };
  return fnInterna;
}
console.log('antes da closure', livro)
const closure = fnExterna();
console.log(closure())
console.log('depois da closure', livro)


function closureSomar(){
  let num = 0;
  function somar(){
    num++;
    texto.innerHTML = `Clicou ${num} ${num > 1 ? 'vezes' : 'vez'}`
    return num;
  }
  return somar;
}

let botao = document.querySelector('#btnClique');
let texto = document.querySelector('#texto');

const closureFnSomar = closureSomar();

botao.addEventListener('click', closureFnSomar)

function verificarSenha(){
  let senhaCadastrada = 'AAbbCC21';
  function check(senhaUsuario){
    if(senhaUsuario == senhaCadastrada){
      return 'Autenticado com sucesso';
    }else{
      return 'Dados inválidos!';
    }
  }
  return check;
}
//const senha = 'AAbbCC21';
const checarSenha = verificarSenha();
// console.log(closureFnSomar())//1
// console.log(closureFnSomar())//2
// console.log(closureFnSomar())//3
// console.log(closureFnSomar())//4