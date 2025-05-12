function avisarErro(error) {
    console.error("Erro na conexão WebSocket: ", error);
    document.getElementById("botaoLogar").disabled = false;
};

export { avisarErro };