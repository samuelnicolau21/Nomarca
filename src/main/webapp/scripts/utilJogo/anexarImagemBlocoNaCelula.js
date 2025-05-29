import {configurarCloneDoContainerMago} from './configurarCloneDoContainerMago.js';

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

        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('idOrigem', idCelula);
			e.dataTransfer.effectAllowed = 'move';
			const visualClone = configurarCloneDoContainerMago(container);
			document.body.appendChild(visualClone);
			e.dataTransfer.setDragImage(visualClone, container.offsetWidth / 2, container.offsetHeight / 2);
			// Remove clone logo após o uso
			setTimeout(() => document.body.removeChild(visualClone), 0);
        });

        container.appendChild(img);
        celula.appendChild(container);
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}
export { anexarImagemBlocoNaCelula };
