console.log("TEMPO DE EXECUCAO");
console.log("TEMPO DE EXECUCAO 2");

function promessa() {
  return new Promise((res, rej) => {
    setTimeout(() => res("Tudo certo"), 1500);
  });
}

console.log(promessa());
promessa().then((res) => console.log(res));

const funcaoAssincrona1 = async function () {
  // funcao assincrona
  return "Executando a função assincrona 1";
};

const funcaoAssincrona2 = async function (msg1) {
  // funcao assincrona
  return `Executando a função assincrona 2 -> ${msg1}`;
};

const funcaoAssincrona3 = async function (msg2) {
  // funcao assincrona
  return `Executando a função assincrona 3 -> ${msg2}`;
};

console.log(funcaoAssincrona1());

const carregandoVariasFuncoesAssincronas = async function () {
  let mensagem1 = await funcaoAssincrona1(); //1000
  let mensagem2 = await funcaoAssincrona2(mensagem1); //900
  let mensagem3 = await funcaoAssincrona3(mensagem2); //1100
  document.getElementById("teste").innerHTML = mensagem3;
};

carregandoVariasFuncoesAssincronas();
