function gerarPecas(cor1, cor2, cor_bloco) {
	return {
		materia1: { src: `./imagens/materia_fria${cor1}.png`, linha: "0", coluna: "2" },
		energia1: { src: `./imagens/energia_fria${cor1}.png`, linha: "0", coluna: "3" },
		tempo1: { src: `./imagens/tempo_frio${cor1}.png`, linha: "0", coluna: "4" },
		mente1: { src: `./imagens/mente_fria${cor1}.png`, linha: "0", coluna: "5" },
		espaco1: { src: `./imagens/espaço_frio${cor1}.png`, linha: "0", coluna: "6" },
		materia2: { src: `./imagens/materia_quente${cor2}.png`, linha: "8", coluna: "2" },
		energia2: { src: `./imagens/energia_quente${cor2}.png`, linha: "8", coluna: "3" },
		tempo2: { src: `./imagens/tempo_quente${cor2}.png`, linha: "8", coluna: "4" },
		mente2: { src: `./imagens/mente_quente${cor2}.png`, linha: "8", coluna: "5" },
		espaco2: { src: `./imagens/espaço_quente${cor2}.png`, linha: "8", coluna: "6" },
		bloco:{src:`./imagens/${cor_bloco}.png`,linha:"3",coluna:"3"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"3",coluna:"4"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"3",coluna:"5"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"4",coluna:"3"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"4",coluna:"5"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"5",coluna:"3"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"5",coluna:"4"},
	 	bloco:{src:`./imagens/${cor_bloco}.png`,linha:"5",coluna:"5"}
	};
}

export { gerarPecas };
