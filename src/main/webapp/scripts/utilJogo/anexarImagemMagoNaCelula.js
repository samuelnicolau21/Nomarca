function anexarImagemMagoNaCelula(idCelula, urlImagem, mana) {
    const celula = document.getElementById(idCelula);
    celula.innerHTML = '';

    if (celula) {
        const container = document.createElement('div');
        container.classList.add('container-peca');

        // Cria a imagem da peça
        const img = document.createElement('img');
        img.src = urlImagem;
        img.alt = 'Imagem na célula';
        img.draggable = true;
        img.classList.add('peca');
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('idOrigem', idCelula);
        });

        // Cria o contador de mana
        const manaDiv = document.createElement('div');
        manaDiv.classList.add('contador-mana');
        manaDiv.textContent = mana;

        // Monta a estrutura
        container.appendChild(img);
        container.appendChild(manaDiv);
        celula.appendChild(container);
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}

export { anexarImagemMagoNaCelula };
