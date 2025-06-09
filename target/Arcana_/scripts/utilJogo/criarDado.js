function criarDado(container, id) {
  const scene = document.createElement('div');
  scene.className = 'scene';
  scene.id = id;

  const dice = document.createElement('div');
  dice.className = 'dice';

  for (let i = 1; i <= 6; i++) {
    const face = document.createElement('div');
    face.className = `face face${i}`;
    face.textContent = i;
    dice.appendChild(face);
  }

  scene.appendChild(dice);
  container.appendChild(scene);
  return scene;
}

function face(valor, idDado) {
  const dado = document.getElementById(idDado);
  if (!dado) return;

  const cubo = dado.querySelector('.dice');
  const faces = dado.querySelectorAll('.face');

  // Atribui valor às faces 2 a 6
  faces.forEach((face, index) => {
    if (index === 0) {
      // face1 (frontal) fica neutra ou com ponto
      face.textContent = '';
    } else {
      face.textContent = valor;
    }
  });

  // Escolhe aleatoriamente uma face de 2 a 6 para girar até ela
  const faceEscolhida = Math.floor(Math.random() * 5) + 2;

  const transformacoes = {
    1: 'rotateX(0deg) rotateY(0deg)',     // face1
    2: 'rotateX(180deg) rotateY(0deg)',   // face2
    3: 'rotateX(0deg) rotateY(90deg)',    // face3
    4: 'rotateX(0deg) rotateY(-90deg)',   // face4
    5: 'rotateX(-90deg) rotateY(0deg)',   // face5
    6: 'rotateX(90deg) rotateY(0deg)',    // face6
  };

  cubo.style.transform = transformacoes[faceEscolhida];
}

export { criarDado, face };
