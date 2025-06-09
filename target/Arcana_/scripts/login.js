function enviarLogin(acao) {
    nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
    const senha = document.getElementById("senha").value;
    if (nomeDeUsuario.trim() && senha.trim()) {
        sessionStorage.setItem("nomeDeUsuario", nomeDeUsuario);

        // Detecta protocolo ws ou wss conforme o protocolo da página
        const protocolo = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
        // Usa o host atual (domínio + porta, se houver)
        const host = window.location.host;
        // Monta a URL do websocket
        const url = `${protocolo}${host}/Arcana_/login/${nomeDeUsuario}`;

        socket = new WebSocket(url);

        socket.onopen = () => enviarAcao(acao, senha, socket);
        socket.onmessage = (event) => verificarRespostaDoServidor(event);
        socket.onclose = (event) => avisarFechamento(event);
        socket.onerror = (error) => avisarErro(error);    
    } else {
        alert("Por favor, digite um nome de usuário e senha.");
    }    
}
