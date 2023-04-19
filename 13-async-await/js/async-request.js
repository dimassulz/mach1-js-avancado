async function mostrarAvatar() {
  try {
    //primeira request ler o arquivo local
    let respostaArquivo = await fetch("assets/file/user.json"); //resposta http json local
    if(!respostaArquivo.ok) throw new Error("Erro ao consultar o link do local")
    let usuario = await respostaArquivo.json();

    //segunda request ler github
    let respostaGitHubAPI = await fetch(
      `https://api.github.com/users/${usuario.login}` //resposta http github
    );
    //if(!respostaGitHubAPI.ok) throw new Error("Erro ao consultar o link do github")
    let usuarioGit = await respostaGitHubAPI.json();

    let img = document.createElement("img");
    img.src = usuarioGit.avatar_url;
    img.height = 80;
    document.body.appendChild(img);

    //promessa para atrasar em 2,5 segundos
    await atrasarProcessos(2500)

    img.remove();
  } catch (erro) {
    alert("Ocorreu um erro ao buscar o avatar: "+erro.message);
  }
}

function atrasarProcessos(milisegundos) {
  return new Promise((resolve, reject) => setTimeout(resolve, milisegundos));
}

mostrarAvatar();
