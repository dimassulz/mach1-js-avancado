const findPost = (id = 1) => {
  const apiURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  };
  
  fetch(apiURL, options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      if (!data) {
        throw new Error("não foi possivel consultar essa informacao!");
      }
      console.log(data.title);
      console.log(data.body);
    })
    .catch((error) => {
      console.error(error);
    });
  
}
