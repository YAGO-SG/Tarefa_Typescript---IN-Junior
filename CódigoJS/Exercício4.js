"use strict";
let pessoa = {
    nome: "yago santos gois",
    email: "yago.sant.gois@gmail.com",
    exibirInfo() {
        return `Nome: ${this.nome} - email: ${this.email}`;
    }
};
console.log(pessoa.exibirInfo());
