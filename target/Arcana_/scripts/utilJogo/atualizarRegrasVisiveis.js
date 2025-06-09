function atualizarRegrasVisiveis(toggle,regras1,regras2) {
	if (toggle.checked) {
		regras1.forEach(p => p.style.display = 'none');
		regras2.forEach(p => p.style.display = 'block');
	} else {
		regras1.forEach(p => p.style.display = 'block');
		regras2.forEach(p => p.style.display = 'none');
	}
}

export {atualizarRegrasVisiveis}