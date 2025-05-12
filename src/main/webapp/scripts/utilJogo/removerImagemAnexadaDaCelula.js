function removerImagemAnexadaDaCelula(idCelula) {
    const celula = document.getElementById(idCelula);
    if (celula) {
        const img = celula.querySelector('img');
        if (img) celula.removeChild(img);
    }
}

export {removerImagemAnexadaDaCelula};