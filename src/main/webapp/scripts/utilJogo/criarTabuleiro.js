import {adicionarPecasNasPosicoesIniciais} from './adicionarPecasNasPosicoesIniciais.js';
import {moverPeca} from './moverPeca.js';

sessionStorage.setItem("cor1",2);
sessionStorage.setItem("cor2",2);

const tabuleiro = document.querySelector('.tabuleiro');

function criarTabuleiro() {
    for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++){
			const celula = document.createElement('div');
			celula.classList.add('celula');
			celula.id = `celula-${i}${j}`;
			celula.addEventListener('dragover', (e) => e.preventDefault());
			celula.addEventListener('drop', (e) => { e.preventDefault();
			            const idOrigem = e.dataTransfer.getData('idOrigem');
			            const celulaOrigem = document.getElementById(idOrigem);
						moverPeca(celulaOrigem,celula)
			        });
			tabuleiro.appendChild(celula);
		}
    }
	adicionarPecasNasPosicoesIniciais(2,2,'madeira_escura');
}

export {criarTabuleiro}
