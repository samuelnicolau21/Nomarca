import {criarMenuDeContexto, esconderMenu} from './criarMenuDeContexto.js';
import {criarCaixaDeRegras} from './criarCaixaDeRegras.js';
import {tornarArrastavel} from './tornarArrastavel.js';

let menuContexto=criarMenuDeContexto();
let caixaRegras =  criarCaixaDeRegras();


window.acaoEditarRegra = () => {
    esconderMenu();
	// Define a posição apenas se ainda não estiver posicionada
	  if (!caixaRegras.style.top) {
	      caixaRegras.style.top = '100px';
	      caixaRegras.style.left = '100px';
	  }
	  caixaRegras.style.display = 'block';
};

tornarArrastavel(caixaRegras, caixaRegras.querySelector('.barra-drag'));

function anexarImagemMagoNaCelula(idCelula, urlImagem, mana) {
    const celula = document.getElementById(idCelula);
    celula.innerHTML = '';

    if (celula) {
        const container = document.createElement('div');
        container.classList.add('container-peca');
		

        // Cria a imagem da peça
        const img = document.createElement('img');
        img.src = urlImagem;
        img.alt = 'Imagem na célula';
        img.draggable = true;
        img.classList.add('peca');

        // Cria o contador de mana
        const manaDiv = document.createElement('div');
        manaDiv.classList.add('contador-mana');
        manaDiv.textContent = mana;

        // Monta a estrutura
        container.appendChild(img);
        container.appendChild(manaDiv);
        celula.appendChild(container);

        // Adiciona o evento de drag após a montagem do container
        img.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('idOrigem', idCelula);
			e.dataTransfer.effectAllowed = 'move';
            // Clona o container visual completo (imagem + mana)
            const visualClone = container.cloneNode(true);
            visualClone.style.position = 'absolute';
            visualClone.style.top = '-9999px';
            visualClone.style.left = '-9999px';
            visualClone.style.width = container.offsetWidth + 'px';
            visualClone.style.height = container.offsetHeight + 'px';
            visualClone.style.opacity = '1'; // força visual sólido
            visualClone.style.zIndex = '1000';

            document.body.appendChild(visualClone);
            e.dataTransfer.setDragImage(visualClone, container.offsetWidth / 2, container.offsetHeight / 2);

            // Remove clone logo após o uso
            setTimeout(() => document.body.removeChild(visualClone), 0);
        });
		
		// Adcionar o evento de contextmenu
		img.addEventListener('contextmenu', function (e) {
		    e.preventDefault();
		    menuContexto.style.top = `${e.pageY}px`;
		    menuContexto.style.left = `${e.pageX}px`;
		    menuContexto.style.display = 'block';
		    menuContexto.dataset.celulaId = idCelula;
		});
		
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}

export { anexarImagemMagoNaCelula };
