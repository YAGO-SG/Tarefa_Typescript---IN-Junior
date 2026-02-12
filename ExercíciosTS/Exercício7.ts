interface RespostaAPI<T> {
    dados: T;
    sucesso: boolean;
}

const resposta1: RespostaAPI<string> = {
    dados: "ok",
    sucesso: true,
}

const resposta2: RespostaAPI<number[]> = {
    dados: [1,3,4,5],
    sucesso: false,
}