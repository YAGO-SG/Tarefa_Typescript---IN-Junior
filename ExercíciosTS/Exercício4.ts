interface Usuario {
    nome: string;
    email: string;
    exibirInfo(): string
}

let pessoa: Usuario = {
    nome: "yago santos gois",
    email: "yago.sant.gois@gmail.com",
    exibirInfo() {
        return `Nome: ${this.nome} - email: ${this.email}`;
    }
}

console.log(pessoa.exibirInfo());