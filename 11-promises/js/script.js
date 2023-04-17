console.log("Primeiro");
setTimeout(() => console.log("Segundo"), 0); //aguardando 2 segundos
console.log("Terceiro");
setTimeout(() => console.log("Quarto"), 0); //aguardando 1 segundo
console.log("Quinto");

// function executaPromessa() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Sucesso - Promessa concluída!"), 5000);
//     setTimeout(() => reject("Error - Promessa Rejeitada!"), 5000);
//   });
// }

// console.log(executaPromessa()); //pending

// executaPromessa()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("SEMPRE SEREI EXECUTADO!"));

// function resolvida() {
//   return Promise.resolve("Promessa resolvida - com sucesso!");
// }

// function rejeitada() {
//   return Promise.reject("Promessa rejeitada - com sucesso!");
// }

// resolvida().then((msg) => console.log(msg));
// rejeitada().then((msg) => console.log(msg));

// function executorDeTarefas(hora, minuto) {
//   return new Promise((resolve, reject) => {
//     const checkTempo = () => {
//       let data = new Date();
//       console.log(
//         `Rodando hora: ${data.getHours()} minuto: ${data.getMinutes()}`
//       );

//       if (data.getHours() == hora && data.getMinutes() == minuto) {
//         console.log("CHEGOU A HORA");
//         alert("É AGORA!");
//         resolve(); //RESOLVE A PROMESSA
//       } else {
//         console.log(
//           "não é a hora e minuto agendado, aguandando 1 minuto a mais"
//         );
//         setTimeout(() => {
//           checkTempo();
//         }, 1000 * 60);
//       }
//     };
//     checkTempo(); //inicio a funcao checkTempo()
//   });
// }

// executorDeTarefas(19, 58).then(() => {
//   console.warn("EXECUTANDO A FUNCAO! AGORA!");
// });

function facoRequisicao(resolvido = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!resolvido) {
        throw new Error("Promessa não resolvida! - (facoRequisicao)");
      }
      resolve("Promessa resolvida - (facoRequisicao)!");
    }, 2000);
  });
}

facoRequisicao(false)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  }) // se for um throw new Error o código para no catch
  .finally(() => console.log("executou depois")); //se for reject se for throw new Error não será executado!

function sucesso(msg) {
  console.log(msg);
}

function erro(erro) {
  console.error(erro);
}

//myPromise.then(sucesso).then().catch(erro);
