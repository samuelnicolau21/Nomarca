function mudarCorDoDado(idDado, cor) {
  const dado = document.getElementById(idDado);
  if (!dado) return;

  const faces = dado.querySelectorAll('.face');
  faces.forEach(face => {
    face.style.backgroundColor = cor;
  });
}

export{mudarCorDoDado}