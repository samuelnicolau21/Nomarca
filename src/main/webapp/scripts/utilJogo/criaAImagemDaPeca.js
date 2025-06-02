function criaAImagemDaPeca(urlImagem){
	const img = document.createElement('img');
	      img.src = urlImagem;
	      img.alt = 'Imagem na célula';
	      img.draggable = true;
	      img.classList.add('peca');
		  return img;
}
export {criaAImagemDaPeca}
