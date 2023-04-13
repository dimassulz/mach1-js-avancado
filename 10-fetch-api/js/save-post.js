const savePost = () => {
  const urlApiPost = "https://jsonplaceholder.typicode.com/posts";
  //usando query string ?chave=valor&chave2=valor2&status=F
  //const urlApiPost = "https://jsonplaceholder.typicode.com/posts?chave=valor&chave2=valor2";

  const dataObjPost = {
    title: "titulo do post 222",
    body: "Desricao do post 3333",
    userId: 2,
  };
  const initOptions = {
    method: "POST", //salvar
    body: JSON.stringify(dataObjPost), //transformando em texto
    headers: {
      //cabeçalho contendo o mime/type application/json
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(urlApiPost, initOptions)
    .then((response) => {
      if (response.ok && response.status === 201) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      console.log("Post salvo com sucesso");
    })
    .catch((error) => console.error(error));
};
