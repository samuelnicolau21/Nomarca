function transformarNumerosEditaveis() {
	const container = document.getElementById("regras-container");
	const regex = /\((\d+)\)/;

	container.querySelectorAll('p').forEach(p => {
		const id = p.id;
		const match = p.innerHTML.match(regex);

		if (match) {
			const num = match[1];
			const spanId = id; 
			const spanHTML = `<span class="numero-editavel" contenteditable="true" data-id="${spanId}" data-original="${num}">${num}</span>`;
			p.innerHTML = p.innerHTML.replace(regex, `(${spanHTML})`);
		}
	});
}

export{transformarNumerosEditaveis}