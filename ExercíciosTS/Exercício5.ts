type Genero = "masculino" | "feminino"

interface Pessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(objeto: Pessoa) {
    return `${objeto.nome} tem ${objeto.idade} anos e se identifica como ${objeto.genero} `
}

let yago: Pessoa = {
    nome: "maria",
    idade: 30,
    genero: "feminino"
}

console.log(apresentarPessoa(yago));
