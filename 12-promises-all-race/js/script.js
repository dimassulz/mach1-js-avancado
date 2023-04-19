const URL_API_PICSUM = `https://picsum.photos`;
const arrPromises = [
  fetch(`${URL_API_PICSUM}/200`, { mode: "no-cors" }), //resolve
  fetch(`https://teste-error`, { mode: "no-cors" }), //reject
  fetch(`${URL_API_PICSUM}/200/300`, { mode: "no-cors" }), //resolve
];

Promise.all(arrPromises)
  .then((resultados) => {
    let arrResultBlob = [];
    resultados.forEach((resultado) => arrResultBlob.push(resultado.blob()));
    return arrResultBlob;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const arrPromisesFake = [
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("promessa 1 resolvida"), 1000)
  ), //resolve
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("promessa 2 resolvida"), 4000)
  ), //resolve
  new Promise((resolve, reject) => {
    //throw new Error("falha ao consultar a promessa 3");
    setTimeout(() => reject("promessa 3 rejeitada"), 3000); //o maior tempo de resolução
  }), //resolve
];

//somente fulfilled
Promise.all(arrPromisesFake) //todas as promessas verificando se todas foram resolvidas
  .then((result) => console.log(result))
  .catch((err) => console.log(err)) //se houver alguma promessa que foi rejeitada ele entra no catch
  .finally(() =>
    console.log("Dados exibidos apos o termino da resolucao das promessas")
  );

//fulfilled e rejected
Promise.allSettled(arrPromisesFake) //todas as promessas sendo resolvidas ou rejeitadas
  .then((result) => {
    result.forEach((res) => console.log(res));
  })
  .catch((err) => console.log("ERRO ALL SETTLED:", err));
