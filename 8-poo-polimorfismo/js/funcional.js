console.log("PROGRAMACAO FUNCIONAL");
//funcao vai trabalhar como se fosse uma Classe
function Usuario(login, senha) {
  this.login = login;
  this.senha = senha;

  this.mostrarLogin = () => `Mostrando login ${this.login}`;
  this.mostrarSenha = () => `Mostrando senha ${this.senha}`;
}

//funcao vai trabalhar como se fosse uma Classe Filha
function UsuarioSimulador(login, senha) {
  Usuario.call(this, login, senha); //construtor
}

//UsuarioSimulador extends do Usuario
UsuarioSimulador.prototype = Object.create(Usuario.prototype);

const usuario = new Usuario("admin", "admin123");
console.log(usuario);
console.log(usuario.mostrarLogin());
console.log(usuario.mostrarSenha());

const usuarioSimulador = new UsuarioSimulador("simulacao", "teste123");
console.log(usuarioSimulador);
//herda os metodos do pai no caso o Usuario
console.log(usuarioSimulador.mostrarLogin());
//herda os metodos do pai no caso o Usuario
console.log(usuarioSimulador.mostrarSenha());


console.log("FIM PROGRAMACAO FUNCIONAL");
