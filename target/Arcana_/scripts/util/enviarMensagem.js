function enviarMensagem(mensagem, socket) {
    if (mensagem && typeof mensagem === "object" && !Array.isArray(mensagem)) {
        const mensagemString = JSON.stringify(mensagem);
        socket.send(mensagemString);
        console.log("Mensagem enviada ao servidor:", mensagemString);
    } 
	else {alert("Por favor, insira um objeto JSON válido para ser enviado pela função enviarMensagem.");}
}

export { enviarMensagem };