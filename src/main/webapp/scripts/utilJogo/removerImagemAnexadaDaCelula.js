function removerImagemAnexadaDaCelula(idCelula) {
    const celula = document.getElementById(idCelula);
    
    if (!celula) {
        console.warn(`Célula ${idCelula} não encontrada`);
        return;
    }

    // Tenta remover container de peça
    const containerPeca = celula.querySelector('.container-peca');
    if (containerPeca) {
        celula.removeChild(containerPeca);
        return;
    }

    // Tenta remover container de bloco
    const containerBloco = celula.querySelector('.container-bloco');
    if (containerBloco) {
        celula.removeChild(containerBloco);
        return;
    }

}

export { removerImagemAnexadaDaCelula };
