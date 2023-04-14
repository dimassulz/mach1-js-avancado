import { API_URL } from "./constantes.js";

const btnCadastrar = document.querySelector("#cadastrar");
const inputMatricula = document.querySelector("#matricula");
const inputNome = document.querySelector("#nome");

btnCadastrar.addEventListener("click", cadastrarAluno);

function cadastrarAluno() {
  //validacao dos campos
  if (inputMatricula.value.length === 0 || inputNome.value.length === 0) {
    alert("Preencha os campos corretamente");
    return;
  }
  desabilitarCampos();
  //transformando os dados do formulario em um objeto
  const aluno = {
    matricula: inputMatricula.value,
    nome: inputNome.value,
  };

  //montando o objeto de initOptions (cabeçalho da requisição)
  const options = {
    method: "POST",
    body: JSON.stringify(aluno), //transformo o objeto em texto com o JSON.stringify()
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  //1a resposta da promise
  const respostaHttpAluno = (response) => {
    if (response.ok && response.status === 200) {
      limparCampos();
      habilitarCampos();
      return response.json(); //retorna o dado no formato json
    }
    if (response.status === 400) {
      throw new Error("Matrícula já cadastrada.");
    }
  };

  //Resposta da promise acima
  const respostaDadoAluno = (response) => {
    //response => {result:boolean, dados: {nome:"", matricula: ""}}
    //console.log(response.result);
    //console.log(response.dados);
    alert(`Aluno ${response.dados.nome} cadastrado com sucesso!`);
  };

  //resposta caso ocorra um erro
  const respostaErro = (erro) => {
    limparCampos();
    habilitarCampos();
    //console.log("Tratamento do erro", erro);
    alert(erro);
  };

  //invocando o metodo fetch passando a URL e as options
  fetch(`${API_URL}/aluno`, options) //url, options -> Promise
    .then(respostaHttpAluno) //tratamento do retorno do http
    .then(respostaDadoAluno) //tratamento do retorno do dado
    .catch(respostaErro) //tratamento de erro
    .finally(console.log("FIM")); //sempre sera executado nao importa sucess ou error da promise
}

function desabilitarCampos() {
  inputMatricula.disabled = true;
  inputNome.disabled = true;
  btnCadastrar.disabled = true;
}

function habilitarCampos() {
  inputMatricula.disabled = false;
  inputNome.disabled = false;
  btnCadastrar.disabled = false;
}

function limparCampos() {
  inputMatricula.value = "";
  inputNome.value = "";
}
