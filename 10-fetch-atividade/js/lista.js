import { API_URL } from "./constantes.js";

const optBuscaNome = document.querySelector("#opt-busca-nome");
const optBuscaTodos = document.querySelector("#opt-busca-todos");
const filtersNome = document.querySelector("#pn-filter-nome");
const btnBuscarMatricula = document.querySelector("#btnBuscarMatricula");
const btnBuscar = document.querySelector("#btnBuscar");
const inputBuscaMatricula = document.querySelector("#matricula");
const labelMatricula = document.querySelector("#matricula-aluno");
const labelNome = document.querySelector("#nome-aluno");
const divDados = document.querySelector("#dados");

optBuscaNome.addEventListener("change", (e) => {
  if (e.target.checked) {
    filtersNome.style.display = "block";
  }
});

optBuscaTodos.addEventListener("change", (e) => {
  if (e.target.checked) {
    filtersNome.style.display = "none";
    document.querySelector("#nome").value = "";
  }
});

inputBuscaMatricula.addEventListener("focus", () => {
  document.querySelector("#resultado-matricula").style.display = "none";
});
btnBuscarMatricula.addEventListener("click", buscarPorMatricula);
btnBuscar.addEventListener("click", () => {
  const inputNomePesquisa = document.querySelector("#nome").value;
  buscarGeral(inputNomePesquisa);
});

function buscarPorMatricula() {
  const matricula = inputBuscaMatricula.value;

  fetch(`${API_URL}/aluno/${matricula}`)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
      if (response.status === 404) {
        throw new Error("Matrícula não cadastrada");
      }
    })
    .then((data) => {
      document.querySelector("#resultado-matricula").style.display = "block";
      labelMatricula.innerHTML = data.matricula;
      labelNome.innerHTML = data.nome;
    })
    .catch((error) => {
      alert(error.message);
    });
}

function buscarGeral(nomeAluno) {
  let urlPesquisa =
    nomeAluno && nomeAluno.length > 0
      ? `${API_URL}/aluno/search?nome=${nomeAluno}`
      : `${API_URL}/aluno/todos`;
  fetch(urlPesquisa)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      divDados.innerHTML = "";
      if (data.length <= 0) {
        //throw new Error('Nenhuma informação encontrada');
        divDados.innerHTML = `<p>Nenhuma informação encontrada</p>`;
      } else {
        data.map((aluno) => {
          divDados.innerHTML += `<p>Matrícula: ${aluno.matricula} - Nome: ${aluno.nome} 
          - <button class="btn btn-sm btn-danger btn-excluir" id="${aluno.matricula}">Excluir</button></p>`;
        });
        document.querySelectorAll(".btn-excluir").forEach((btn) => {
          btn.addEventListener("click", () => excluir(btn.id));
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

function excluir(matricula) {
  const options = {
    method: "POST",
  };
  fetch(`${API_URL}/aluno/deletar?matricula=${matricula}`, options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }
      if (response.status === 404) {
        throw new Error("Matrícula não encontrada");
      }
    })
    .then((response) => {
      if (response.result) {
        alert("Aluno excluido com sucesso!");
        buscarGeral();
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}
