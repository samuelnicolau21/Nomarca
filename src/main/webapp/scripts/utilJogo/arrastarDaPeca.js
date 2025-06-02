function arrastarDaPeca(e, container, idCelula) {
  e.dataTransfer.setData('idOrigem', idCelula);
  e.dataTransfer.effectAllowed = 'move';

  const visualClone = container.cloneNode(true);
  visualClone.style.position = 'absolute';
  visualClone.style.top = '-9999px';
  visualClone.style.left = '-9999px';
  visualClone.style.width = container.offsetWidth + 'px';
  visualClone.style.height = container.offsetHeight + 'px';
  visualClone.style.opacity = '1';
  visualClone.style.zIndex = '1000';

  document.body.appendChild(visualClone);
  e.dataTransfer.setDragImage(visualClone, container.offsetWidth / 2, container.offsetHeight / 2);

  setTimeout(() => document.body.removeChild(visualClone), 0);
}
 export {arrastarDaPeca}