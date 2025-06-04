import {anexarImagemMagoNaCelula} from './anexarImagemMagoNaCelula.js';
import { anexarImagemBlocoNaCelula } from './anexarImagemBlocoNaCelula.js';
import {removerImagemAnexadaDaCelula} from './removerImagemAnexadaDaCelula.js';
import { gerarPecas } from "./nomePecaSrcImagem.js";
import {atualizarTextoDaRegra} from './atualizarTextoDaRegra.js';
import {face} from './criarDado.js';
import {mudarCorDoDado} from './mudarCorDoDado.js';



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
	//1.2 atualiza o valor das regras
	atualizarTextoDaRegra('acao1', jogo.acoesDoJogador1PorTurno);
	atualizarTextoDaRegra('acao2', jogo.acoesDoJogador2PorTurno);
	atualizarTextoDaRegra('mana1', jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador1);
	atualizarTextoDaRegra('mana1b', jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador1);
	atualizarTextoDaRegra('mana2', jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador2);
	atualizarTextoDaRegra('mana2b', jogo.quantidadeDeManaGanhoNoFimDoTurnoJogador2);
	atualizarTextoDaRegra('locomocao1', jogo.quantidadeDeCasasDoMovimentoJogador1);
	atualizarTextoDaRegra('locomocao2', jogo.quantidadeDeCasasDoMovimentoJogador2);
	atualizarTextoDaRegra('locomocaoBloco1', jogo.quantidadeDeCasasDoMovimentoBlocoJogador1);
	atualizarTextoDaRegra('locomocaoBloco2', jogo.quantidadeDeCasasDoMovimentoBlocoJogador2);
	atualizarTextoDaRegra('controle1', jogo.quantidadeDeTurnosDeControleInimigoJogador1);
	atualizarTextoDaRegra('controle1b', jogo.quantidadeDeTurnosDeControleInimigoJogador1);
	atualizarTextoDaRegra('controle2', jogo.quantidadeDeTurnosDeControleInimigoJogador2);
	atualizarTextoDaRegra('controle2b', jogo.quantidadeDeTurnosDeControleInimigoJogador2);
	atualizarTextoDaRegra('alcance1', jogo.alcanceDaMenteJogador1);
	atualizarTextoDaRegra('alcance2', jogo.alcanceDaMenteJogador2);
	
	if(jogo.jogadorDoTurno===jogo.jogador1){
		mudarCorDoDado('dado-j1','#0894a6')
		mudarCorDoDado('dado-j2','#0894a6')
		
	}
	else{
		mudarCorDoDado('dado-j1','#e1ad0c')
		mudarCorDoDado('dado-j2','#e1ad0c')
	}
	face(jogo.acoesDisponiveisJogadorDoTurno, 'dado-j1');
	
	
	
	// 2. Adicionar peças com base no novo estado
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(jogo.tabuleiro[i][j]){
				let nomePeca = jogo.tabuleiro[i][j].nomeDaPeca;
				let imagemSrc = pecas[nomePeca].src;
				let manaPeca = jogo.tabuleiro[i][j].manaDaPeca;
				if (imagemSrc && nomePeca!='bloco') {
					console.log("criando axionauta");
					anexarImagemMagoNaCelula(`celula-${i}${j}`, imagemSrc, manaPeca);
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
