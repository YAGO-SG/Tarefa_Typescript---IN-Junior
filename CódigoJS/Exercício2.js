"use strict";
function mostrarMensagemStatus(status) {
    if (status == "sucesso") {
        console.log(`dados carregados com sucesso`);
    }
    else if (status == "erro") {
        console.log(`erro ao carregar dados`);
    }
    else {
        console.log(`Aguarde... carregando dados`);
    }
}
mostrarMensagemStatus("carregando");
/*let Lista: number[] = [1, 4, 6, 7, 3, 2, 7];
console.log(Lista);

interface lista {
    lista: string;
    valor: number;
    produtos: Iprodutos;
}

interface Iprodutos {
    nome: 'biscoito' | 'fruta'
}

interface limpeza extends lista {
    produto1: string;
    produto2: string;
}


const mercado: limpeza = {
    lista: "lista 2",
    valor: 203,
    produtos: { nome: "biscoito"},
    produto1: "lavanda",
    produto2: "espumante",
}

console.log(mercado);*/ 
