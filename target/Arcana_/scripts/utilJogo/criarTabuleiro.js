import {adicionarPecasNasPosicoesIniciais} from './adicionarPecasNasPosicoesIniciais.js';
import {moverPeca} from './moverPeca.js';
import {iniciarSocketDeJogada} from './socketJogada.js';
import {criarDado, face} from './criarDado.js';

const idPartida = sessionStorage.getItem("idPartida");
const nomeDeUsuario = sessionStorage.getItem("nomeDeUsuario");

sessionStorage.setItem("cor1",2);
sessionStorage.setItem("cor2",1);
sessionStorage.setItem("cor_bloco",'cubo_cinza_simples')

const tabuleiro = document.querySelector('.tabuleiro');

iniciarSocketDeJogada(nomeDeUsuario, idPartida);

function criarTabuleiro() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');
            celula.id = `celula-${i}${j}`;
            celula.addEventListener('dragover', (e) => e.preventDefault());
            celula.addEventListener('drop', (e) => {
                e.preventDefault();
                const idOrigem = e.dataTransfer.getData('idOrigem');
                const celulaOrigem = document.getElementById(idOrigem);
                moverPeca(celulaOrigem, celula);
            });
            tabuleiro.appendChild(celula);
        }
    }

    adicionarPecasNasPosicoesIniciais(2, 1, 'cubo_cinza_simples');

    // Apenas 1 dado por jogador, com IDs fixos
    criarDado(document.querySelector('.dados-jogador1'), 'dado-j1');
    criarDado(document.querySelector('.dados-jogador2'), 'dado-j2');
	
}

export {criarTabuleiro}
