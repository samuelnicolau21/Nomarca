function anexarImagemMagoNaCelula(idCelula, urlImagem) {
    const celula = document.getElementById(idCelula);
    if (celula) {
        const img = document.createElement('img');
        img.src = urlImagem;
        img.alt = 'Imagem na célula';
    	img.draggable = true;  
        img.addEventListener('dragstart', (e) => {e.dataTransfer.setData('idOrigem', idCelula);});
        celula.appendChild(img);
    }
	else{
		console.log(`Célula ${idCelula} não encontra`);
	}
}

export {anexarImagemMagoNaCelula};