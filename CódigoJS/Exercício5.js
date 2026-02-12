"use strict";
function apresentarPessoa(objeto) {
    return `${objeto.nome} tem ${objeto.idade} anos e se identifica como ${objeto.genero} `;
}
let yago = {
    nome: "maria",
    idade: 30,
    genero: "feminino"
};
console.log(apresentarPessoa(yago));
