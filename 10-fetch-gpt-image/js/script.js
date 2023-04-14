import { env } from "../config.js";
const inputTexto = document.getElementById("texto");
const selectImgs = document.getElementById("qtdImagens");
const btnPesquisar = document.getElementById("pesquisar");
const imageDiv = document.getElementById("imagemDiv");
btnPesquisar.addEventListener("click", () => detect());
function detect() {
  inputTexto.disabled = true;
  btnPesquisar.disabled = true;
  selectImgs.disabled = true;
  imageDiv.innerHTML = "";
  const data = {
    prompt: inputTexto.value,
    n: Number(selectImgs.value),
    size: "256x256",
  };
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": env.X_RAPIDAPI_HOST,
    },
    body: JSON.stringify(data),
  };

  fetch("https://openai80.p.rapidapi.com/images/generations", options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then((json) => {
      console.log(json);
      
      json.data.map((data, i) => {
        const img = document.createElement("img");
        img.src = `${data.url}`;
        img.alt = `Imagem ${++i} gerada pelo chat gpt`;
        imageDiv.appendChild(img);
      });

      inputTexto.disabled = false;
      btnPesquisar.disabled = false;
      selectImgs.disabled = false;
    })
    .catch((err) => {
      inputTexto.disabled = false;
      btnPesquisar.disabled = false;
      selectImgs.disabled = false;
      console.error(err);
    });
}
