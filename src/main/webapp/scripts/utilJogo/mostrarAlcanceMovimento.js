import { getJogo } from './socketJogada.js';

function mostrarAlcanceMovimento(idCelula) {
    let jogo = getJogo();
    const celula = document.getElementById(idCelula);
    if (!celula) return;

    // Extrair linha e coluna
    const idNumerico = idCelula.replace('celula-', '');
    const r = Number(idNumerico[0]);
    const c = Number(idNumerico[1]);

    const peca = jogo.tabuleiro[r][c];
    if (!peca) return;

    const dono = peca.donoOriginalDaPeca;

    let alcance, classeAlcance;
    if (dono === jogo.jogador1) {
        alcance = jogo.quantidadeDeCasasDoMovimentoJogador1;
        classeAlcance = 'celula-alcance-jogador1';
    } else if (dono === jogo.jogador2) {
        alcance = jogo.quantidadeDeCasasDoMovimentoJogador2;
        classeAlcance = 'celula-alcance-jogador2';
    } else{
        alcance = 1;
		classeAlcance = 'celula-alcance-jogador2';
    }

    const todasCelulas = document.querySelectorAll('.celula');

    todasCelulas.forEach(cel => {
        const celIdNumerico = cel.id.replace('celula-', '');
        const row = Number(celIdNumerico[0]);
        const col = Number(celIdNumerico[1]);

        if ((row === r && Math.abs(col - c) <= alcance) || (col === c && Math.abs(row - r) <= alcance)) {
            cel.classList.add(classeAlcance);
        }
    });
}

function limparAlcance() {
    document.querySelectorAll('.celula-alcance-jogador1, .celula-alcance-jogador2')
        .forEach(cel => {
            cel.classList.remove('celula-alcance-jogador1', 'celula-alcance-jogador2');
        });
}

export { mostrarAlcanceMovimento, limparAlcance };
