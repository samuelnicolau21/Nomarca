function avisarFechamento (event) {
    console.warn("Conexão WebSocket fechada:", event);
    document.getElementById("avisos").textContent = "Conexão perdida. Tente novamente.";
    document.getElementById("botaoLogar").disabled = false;
};

export { avisarFechamento };