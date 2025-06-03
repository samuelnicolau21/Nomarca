function atualizarTextoDaRegra(id, novoValor) {
	
	const elemento = document.getElementById(id);
	if (!elemento) {
		console.warn(`Elemento com id '${id}' não encontrado`);
		return;
	}
	// Tenta encontrar o span editável, se já tiver sido criado
	const span = elemento.querySelector('.numero-editavel');
	if (span) {
		span.textContent = novoValor;
	} else {
		// Substitui apenas o número dentro do primeiro parêntese que encontrar
		elemento.innerHTML = elemento.innerHTML.replace(/\(\d+\)/, `(${novoValor})`);
	}
}


export{atualizarTextoDaRegra}