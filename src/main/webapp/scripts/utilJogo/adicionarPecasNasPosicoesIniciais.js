import {anexarImagemMagoNaCelula} from './anexarImagemMagoNaCelula.js';
import {anexarImagemBlocoNaCelula} from './anexarImagemBlocoNaCelula.js';

let cor1;
let cor2;

function adicionarPecasNasPosicoesIniciais(cor_1, cor_2, corBlocos){
	cor1=cor_1;
	cor2=cor_2;
	anexarImagemMagoNaCelula('celula-02', `./imagens/materia_fria${cor1}.png`,1);
	anexarImagemMagoNaCelula('celula-03', `./imagens/energia_fria${cor1}.png`,1);
	anexarImagemMagoNaCelula('celula-04', `./imagens/tempo_frio${cor1}.png`,1);
	anexarImagemMagoNaCelula('celula-05', `./imagens/mente_fria${cor1}.png`,1);
	anexarImagemMagoNaCelula('celula-06', `./imagens/espaço_frio${cor1}.png`,1);
	anexarImagemMagoNaCelula('celula-82', `./imagens/materia_quente${cor2}.png`,1);
	anexarImagemMagoNaCelula('celula-83', `./imagens/energia_quente${cor2}.png`,1);
	anexarImagemMagoNaCelula('celula-84', `./imagens/tempo_quente${cor2}.png`,1);
	anexarImagemMagoNaCelula('celula-85', `./imagens/mente_quente${cor2}.png`,1);
	anexarImagemMagoNaCelula('celula-86', `./imagens/espaço_quente${cor2}.png`,1);
	anexarImagemBlocoNaCelula('celula-34', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-43', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-45', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-54', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-53', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-33', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-35', `./imagens/${corBlocos}.png`);
	anexarImagemBlocoNaCelula('celula-55', `./imagens/${corBlocos}.png`);
};

export {adicionarPecasNasPosicoesIniciais};