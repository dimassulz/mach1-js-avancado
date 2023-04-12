//GET (buscar)
//POST (salvar)

let myRequest = new XMLHttpRequest();

myRequest.open(
  "GET", //primeiro parametro GET
  "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas", //segundo paramtro URL da API
  true //terceiro parametro Asyncronous (boolean)
);

let tbodyTela = document.getElementById("resultado");

myRequest.onreadystatechange = function () {
  if (myRequest.readyState === myRequest.DONE) { //OPENED
    //4
    //DONE sucesso para conectar na api
    if (myRequest.status === 200) {
      // status code 200, representa sucesso no retorno dos dados
      console.log(myRequest.responseText); //texto
      let response = JSON.parse(myRequest.responseText); //converto para objeto JSON
      console.log(response);
      response.forEach((objeto) => {
        tbodyTela.innerHTML += `<tr><td>${objeto.codigo}</td><td>${objeto.nome}</td></tr>`;
      });
    }
    if (myRequest.status === 400) {
      throw new Error("Ocorre um erro ao buscar as informacoes!");
    }
    document.getElementById("carregando").style.display = "none";
    document.getElementById("loader").style.display = "none";
  }
};

myRequest.send(); //enviando a request
