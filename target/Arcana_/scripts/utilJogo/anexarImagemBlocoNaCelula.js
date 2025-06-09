import {mostrarAlcanceMovimento, limparAlcance} from './mostrarAlcanceMovimento.js';
import {arrastarDaPeca} from './arrastarDaPeca.js';

function anexarImagemBlocoNaCelula(idCelula, urlImagem) {
    const celula = document.getElementById(idCelula);
    celula.innerHTML = '';

    if (celula) {
        const container = document.createElement('div');
        container.classList.add('container-bloco');

        const img = document.createElement('img');
        img.src = urlImagem;
        img.alt = 'Bloco na célula';
        img.classList.add('imgBloco');
        img.draggable = true;
		
		img.addEventListener('dragstart', function (e) {arrastarDaPeca(e, container, idCelula);});
        
        container.appendChild(img);
        celula.appendChild(container);
		
		img.addEventListener('mouseenter', () => mostrarAlcanceMovimento(idCelula));
		img.addEventListener('mouseleave', () => limparAlcance());
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}
export { anexarImagemBlocoNaCelula };
