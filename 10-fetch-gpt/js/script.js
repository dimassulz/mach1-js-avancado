import { env } from "../config.js";
const textArea = document.getElementById("texto");
const btnPesquisar = document.getElementById("pesquisar");
const messageArea = document.getElementById("mensagem");
btnPesquisar.addEventListener("click", () => detect());
function detect() {
  btnPesquisar.disabled = true;
  textArea.disabled = true;
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: textArea.value,
      },
    ],
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

  fetch("https://openai80.p.rapidapi.com/chat/completions", options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then((json) => {
      console.log(json);
      messageArea.innerHTML = `<p>${json.choices[0].message.content}</p>`;
      textArea.disabled = false;
      btnPesquisar.disabled = false;
    })
    .catch((err) => {
      textArea.disabled = false;
      btnPesquisar.disabled = false;
      console.error(err);
    });
}
