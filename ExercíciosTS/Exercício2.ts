type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus (status: StatusRequisicao) {
    if(status == "sucesso") {
        console.log(`dados carregados com sucesso`);
    } else if (status == "erro") {
        console.log(`erro ao carregar dados`)
    } else {
        console.log(`Aguarde... carregando dados`)
    } 
}

mostrarMensagemStatus("carregando");