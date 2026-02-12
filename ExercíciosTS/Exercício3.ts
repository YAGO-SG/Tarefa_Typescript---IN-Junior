interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function resumirLivro (resumo: Livro) {
    console.log(`O livro '${resumo.titulo}' foi escrito por ${resumo.autor} em ${resumo.anoPublicacao}`)
}

let meuLivro: Livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
}

resumirLivro(meuLivro);
 