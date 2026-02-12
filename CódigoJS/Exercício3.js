"use strict";
function resumirLivro(resumo) {
    console.log(`O livro '${resumo.titulo}' foi escrito por ${resumo.autor} em ${resumo.anoPublicacao}`);
}
let meuLivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
};
resumirLivro(meuLivro);
