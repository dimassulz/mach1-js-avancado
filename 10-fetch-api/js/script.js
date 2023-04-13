const findStateBr = () => {
  console.log('carregando...')
  const urlJson = fetch("./assets/files/estados-cidades.json"); //promise

  urlJson
    .then((resposta) => {
      console.log("TRATAMENTO DA CONEXAO");
      if (resposta.ok && resposta.status === 200) {
        return resposta.json(); //.text(), .blob(), .arrayBuffer()
      } else {
        throw new Error("Erro ao buscar os dados no arquivo!");
      }
    })
    .then((dados) => {
      //throw new Error("Erro ao retornar os dados do arquivo!");
      console.log(
        "EXIBINDO OS DADOS DA PROMESSA ACIMA - Trabalhar os dados do arquivo"
      );
      console.log(dados);
      console.log('finalizado!')
    })
    .catch((erros) => {
      console.error(erros);
    });
};
/* NOSSA BASE DO FETCH */
// fetch('./assets/files/estados-cidades.json')
// .then(() => {}) //resposta da conexao
// .then(() ) //tratamento da resposta
// .catch() //o fetch verifica se houve algum erro na requesicao
