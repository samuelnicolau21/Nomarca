import {adicionarPecasNasPosicoesIniciais} from './adicionarPecasNasPosicoesIniciais.js';
import {moverPeca} from './moverPeca.js';

sessionStorage.setItem("cor1",3);
sessionStorage.setItem("cor2",3);
sessionStorage.setItem("cor_bloco",'cubo_cinza_simples')

const tabuleiro = document.querySelector('.tabuleiro');

function criarTabuleiro() {
    for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++){
			const celula = document.createElement('div');
			celula.classList.add('celula');
			// Aplica cor estilo xadrez
			/*if ((i + j) % 2 === 0) {
			    celula.classList.add('clara_textura');
			} else {
			    celula.classList.add('escura_textura');
			}*/
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
	adicionarPecasNasPosicoesIniciais(3,3,'cubo_cinza_simples');
}

export {criarTabuleiro}
