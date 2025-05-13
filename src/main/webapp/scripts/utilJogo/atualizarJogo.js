import {anexarImagemMagoNaCelula} from './anexarImagemMagoNaCelula.js';
import { anexarImagemBlocoNaCelula } from './anexarImagemBlocoNaCelula.js';
import {removerImagemAnexadaDaCelula} from './removerImagemAnexadaDaCelula.js';
import { gerarPecas } from "./nomePecaSrcImagem.js";



function atualizarJogo(jogo){
	console.log("Atualiza jogo");
	const cor1 = sessionStorage.getItem("cor1");
	const cor2 = sessionStorage.getItem("cor2");
	const cor_bloco = sessionStorage.getItem("cor_bloco");
	const pecas = gerarPecas(cor1, cor2, cor_bloco);
	
	// 1. Remover TODAS as imagens de todas as células
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			removerImagemAnexadaDaCelula(`celula-${i}${j}`);
		}
	}

	// 2. Adicionar peças com base no novo estado
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(jogo.tabuleiro[i][j]){
				let nomePeca = jogo.tabuleiro[i][j].nomeDaPeca;
				let imagemSrc = pecas[nomePeca].src;
				if (imagemSrc && nomePeca!='bloco') {
					console.log("criando axionauta");
					anexarImagemMagoNaCelula(`celula-${i}${j}`, imagemSrc);
				}
				else if(imagemSrc && nomePeca=='bloco'){
					console.log("criando bloco");
					anexarImagemBlocoNaCelula(`celula-${i}${j}`, imagemSrc);
				}
				 else {
					console.warn(`Imagem não encontrada para a peça: ${nomePeca}`);
				}
			}
		}
	}
}

export { atualizarJogo }
