function verificarRespostaDoServidor(event){
    console.log("Mensagem do servidor: " + event.data);
    if (event.data == "Login ok") {
		window.location.href = "modoDeJogo.html";
	}
	else {
        document.getElementById("avisos").textContent = event.data;
        document.getElementById("botaoLogar").disabled = false;
    }
 }
 
 export { verificarRespostaDoServidor };
 