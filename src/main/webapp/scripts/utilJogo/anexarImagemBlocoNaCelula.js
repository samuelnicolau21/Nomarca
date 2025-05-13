function anexarImagemBlocoNaCelula(idCelula, urlImagem) {
    const celula = document.getElementById(idCelula);
    celula.innerHTML = ''; // Limpa qualquer conteúdo anterior

    if (celula) {
        const container = document.createElement('div');
        container.classList.add('container-bloco');

        const img = document.createElement('img');
        img.src = urlImagem;
        img.alt = 'Bloco na célula';
        img.classList.add('imgBloco');
        img.draggable = true;

        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('idOrigem', idCelula);
        });

        container.appendChild(img);
        celula.appendChild(container);
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}

export { anexarImagemBlocoNaCelula };
