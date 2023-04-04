const itens = [
  {
    nome: "Menu 1",
    itens: [
      { nome: "Menu 1.1", itens: [] },
      { nome: "Menu 1.2", itens: [] },
      { nome: "Menu 1.3", itens: [{ nome: "Menu 1.3.1", itens: [] }] },
    ],
  },
  {
    nome: "Menu 2",
    itens: [
      {
        nome: "Menu 2.1",
        itens: [
          {
            nome: "Menu 2.1.1",
            itens: [
              {
                nome: "Menu 2.1.1.1",
                itens: [
                  { nome: "Menu 2.1.1.1.1", itens: [] },
                  { nome: "Menu 2.1.1.1.2", itens: [] },
                ],
              },
            ],
          },
          { nome: "Menu 2.1.2", itens: [] },
        ],
      },
      { nome: "Menu 2.2", itens: [{ nome: "Menu 2.2.1", itens: [] }] },
    ],
  },
];

function funcaoRecursiva(nome, arrayItens, arrMenu = []) {
  for (item of arrayItens) {
    arrMenu.push(item.nome);
    if (nome == item.nome) {
      return arrMenu.join(" > ");
    }
    if (item.itens.length > 0) {
      let retornoFuncao = funcaoRecursiva(nome, item.itens, arrMenu);
      if(retornoFuncao != null){
        return retornoFuncao;
      }
    }
    arrMenu.pop();
  }
  return null;
}
