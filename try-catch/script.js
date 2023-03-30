{
  try {
    console.log("try -> ENTRADA");
    //throw "ERRO que eu criei!"; // erro como string
  } catch (error) {
    console.log(error.message); //PRINCIPAL mensagem de erro
    console.log(error.name); //TIPO DE ERRO ReferenceError
    console.log(error.fileName);
    console.log(error.lineNumber);
    console.log(error.columnNumber);
    console.log(error.stack); //Pilha do erro
    console.error(error);
  } finally {
    console.log("finally - SAIDA");
  }
}

{
  function testeTryCatch() {
    try {
      return 1;
    } catch {
      return 2;
    } finally {
      return 3;
    }
  }
  console.log(testeTryCatch());
}

{
  function testeNumerico() {
    const inputNumero = Number(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    let mensagemRetorno = "";
    try {
      //se esse campo e um numero uma exception
      if (isNaN(inputNumero)) {
        throw "Digite um valor numérico";
      }
      if (inputNumero < 10) {
        throw "O numero informado é menor que 10";
      }
      if (inputNumero > 20) {
        throw "O numero informado é maior que 20";
      }
      mensagemRetorno = `[SUCESSO] - Número Válido`;
    } catch (error) {
      mensagemRetorno = `[ERRO] - ${error}`;
      console.error(mensagemRetorno);
    } finally {
      mensagem.innerHTML = mensagemRetorno;
      //setTimeout(() => (mensagem.innerHTML = ''), 3000);
    }
  }
}

/**
 * 1. RangeError
 * 2. ReferenceError
 * 3. SyntaxError
 * 4. TypeError
 * 5. URIError ()
 * 6. EvalError (deprecated)
 * 7. InternalError (firefox)
 */

{
  //1. RangeError
  //indica um erro quando um valor não está no conjunto ou intervalo de valores permitidos
  let arr = [1, 2]; //tamanho array js -> 2 elevado 32 -> 4294967296
  arr.length; //2
  //arr.length = 4294967296;
}

{
  //2. ReferenceError
  const variavel = "teste";
  //varievel;
}

{
  //3. SyntaxError
  //let teste a = "teste";
}
{
  //4. TypeError
  let numero = 123;
  //numero.toUpperCase();
}

{
  try {
    let pessoa = null;
    try {
      pessoa = JSON.parse('{ "nome" "José" }');
    } catch (e) {
      console.warn(e.message)
      throw e
    }
  } catch (err) {
    console.error(err.message)
  }
}
