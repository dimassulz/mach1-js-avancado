let user = null;

export function login(username, password) {
  if (username === "admin" && password === "senha") {
    user = {
      nome: "João do Teste",
      username: username,
      password: password,
    };
    return true;
  }else{
    return false;
  }
}

export function logout() {
  user = null;
  return "Saiu do sistema";
}

export function isAuthenticated() {
  return user !== null;
}

export function getUserData() {
  return user;
}
