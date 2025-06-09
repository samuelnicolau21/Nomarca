import { getJogo } from './socketJogada.js';

function mostrarAlcanceMovimento(idCelula) {
    let jogo = getJogo();
    const celula = document.getElementById(idCelula);
    if (!celula) return;

    const idNumerico = idCelula.replace('celula-', '');
    const r = Number(idNumerico[0]);
    const c = Number(idNumerico[1]);

    const peca = jogo.tabuleiro[r][c];
    if (!peca) return;

    const dono = peca.donoOriginalDaPeca;
    const nome = peca.nomeDaPeca;

    let alcance = 0;
    let classeAlcance = '';
    let alcanceMente = 0;
    let classeMente = '';

    if (dono === jogo.jogador1) {
        alcance = jogo.quantidadeDeCasasDoMovimentoJogador1;
        classeAlcance = 'celula-alcance-jogador1';
        alcanceMente = jogo.alcanceDaMenteJogador1;
        classeMente = 'celula-mente-jogador1';
    } else if (dono === jogo.jogador2) {
        alcance = jogo.quantidadeDeCasasDoMovimentoJogador2;
        classeAlcance = 'celula-alcance-jogador2';
        alcanceMente = jogo.alcanceDaMenteJogador2;
        classeMente = 'celula-mente-jogador2';
    } else if (dono === 'ambos') {
        // Define alcance para peças do tipo BLOCO (em cinza translúcido) baseado no jogador da vez
        if (jogo.jogadorDoTurno === jogo.jogador1) {
            alcance = jogo.quantidadeDeCasasDoMovimentoBlocoJogador1;
        } else {
            alcance = jogo.quantidadeDeCasasDoMovimentoBlocoJogador2;
        }
        classeAlcance = 'celula-alcance-bloco'; // precisa ter estilo cinza translúcido

        // Para peças "mente1" ou "mente2" com dono 'ambos', usa alcance da mente conforme jogador da vez
        if (jogo.jogadorDaVez === jogo.jogador1) {
            alcanceMente = jogo.alcanceDaMenteJogador1;
            classeMente = 'celula-mente-jogador1';
        } else {
            alcanceMente = jogo.alcanceDaMenteJogador2;
            classeMente = 'celula-mente-jogador2';
        }
    }

    const todasCelulas = document.querySelectorAll('.celula');

    todasCelulas.forEach(cel => {
        const celIdNumerico = cel.id.replace('celula-', '');
        const row = Number(celIdNumerico[0]);
        const col = Number(celIdNumerico[1]);

        // Horizontal e vertical (movimento normal ou de bloco neutro)
        if ((row === r && Math.abs(col - c) <= alcance) ||
            (col === c && Math.abs(row - r) <= alcance)) {
            cel.classList.add(classeAlcance);
        }

        // Alcance da mente (em raio quadrado ao redor)
        if ((nome === 'mente1' || nome === 'mente2') &&
            Math.abs(row - r) <= alcanceMente &&
            Math.abs(col - c) <= alcanceMente) {
            cel.classList.add(classeMente);
        }
    });
}


function limparAlcance() {
    document.querySelectorAll(
        '.celula-alcance-jogador1, .celula-alcance-jogador2, .celula-mente-jogador1, .celula-mente-jogador2, .celula-alcance-bloco'
    ).forEach(cel => {
        cel.classList.remove(
            'celula-alcance-jogador1',
            'celula-alcance-jogador2',
            'celula-mente-jogador1',
            'celula-mente-jogador2',
            'celula-alcance-bloco'
        );
    });
}


export { mostrarAlcanceMovimento, limparAlcance };
