//importacao dinamica
import("./modules/constants.mjs").then(m => {
    console.log(m.PI)
    console.log(m.ATIVO)
    console.log(m.API_URL)
});

// import {
//   getUserData as getUser, //alias -> getUser
//   isAuthenticated as auth, //alias -> auth
//   login,
//   logout,
// } from "./modules/auth.mjs";
import * as auth from "./modules/auth.mjs"; // importando tudo do arquivo auth.mjs
import { API_URL, ATIVO } from "./modules/constants.mjs";
import format, { DATE_NOW } from "./modules/data.mjs"; // o nome pode ser diferente do nome da funcao
import truncateText from "./modules/truncateText.mjs";


console.log(API_URL);
console.log(ATIVO);
console.log(auth.login("admin", "senha")); // true
console.log(auth.isAuthenticated()); // true
console.log(auth.getUserData()); // obj
console.log(auth.logout()); // true saiu do sistema

console.log(auth.isAuthenticated()); //false
console.log(auth.getUserData()); // obj = null

console.log(format("2023-3-30"));
console.log(truncateText("João do Teste no console"));
console.log(DATE_NOW);
