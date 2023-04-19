const URL_API = `http://www.boredapi.com/api/activity`;
const arrPromisesBored = [
  fetch(`${URL_API}?type=recreational`).then(
    (response) => {
      if (!response.ok) throw new Error("Erro no servidor");

      return response.json();
    }
  ), //
  fetch(`${URL_API}?accessibility=1`).then(
    (response) => {
      if (!response.ok) throw new Error("Erro no servidor");

      return response.json();
    }
  ), //
  fetch(`${URL_API}?participants=2`).then(
    (response) => {
      if (!response.ok) throw new Error("Erro no servidor");

      return response.json();
    }
  ), //
];
Promise.race(arrPromisesBored)
  .then((result) => console.log("RACE sucesso: ", result))
  .catch((err) => console.log("RACE erro: ", err));
