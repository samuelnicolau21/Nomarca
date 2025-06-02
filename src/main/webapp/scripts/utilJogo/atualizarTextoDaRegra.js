function atualizarTextoDaRegra(id, novoValor) {
	
	const elemento = document.getElementById(id);
	console.log(`Função chamada para id: ${id}, com novoValor: ${novoValor}`);
	if (!elemento) {
		console.warn(`Elemento com id '${id}' não encontrado`);
		return;
	}

	// Tenta encontrar o span editável, se já tiver sido criado
	const span = elemento.querySelector('.numero-editavel');

	if (span) {
		//console.log(`Antes da alteração - id: ${id}, span.textContent: ${span.textContent}`);
		span.textContent = novoValor;
		//console.log(`Depois da alteração - id: ${id}, span.textContent: ${span.textContent}`);
	} else {
		//console.log(`Fazendo replace do número entre parênteses no id: ${id}`);
		// Substitui apenas o número dentro do primeiro parêntese que encontrar
		elemento.innerHTML = elemento.innerHTML.replace(/\(\d+\)/, `(${novoValor})`);
	}
}


export{atualizarTextoDaRegra}