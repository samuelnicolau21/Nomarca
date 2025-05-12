function verificarRespostaDoServidor(event) {
    console.log("Mensagem do servidor: " + event.data);
    if (event.data=="") {
		document.getElementById("avisos").textContent = "aguardanddo a entrada de outro jogador";
    }
	else{
		sessionStorage.setItem("idPartida", event.data);
		window.location.href = "jogo.html";
	}
};

export { verificarRespostaDoServidor };