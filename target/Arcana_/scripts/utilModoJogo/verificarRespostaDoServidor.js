function verificarRespostaDoServidor(event) {
    console.log("Mensagem do servidor: " + event.data);
    if (event.data==="") {
		document.getElementById("avisos").textContent = "aguardanddo a entrada de outro jogador";
    	return;
	}
	
	const partida = JSON.parse(event.data);
	const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");
	const souJogador1 = partida.usuario1 === nomeDeUsuario;
	
	sessionStorage.setItem("idPartida",partida.id);
	sessionStorage.setItem("souJogador1", souJogador1);
	window.location.href = "jogo.html";
	
};

export { verificarRespostaDoServidor };