// recuperar o canvas
// querySelector pega sempre o primeiro

let meuCanvas = document.querySelector('#canvas');

// criar o contexto
let ctx = meuCanvas.getContext('2d');

// criar o objeto quadrado
let quadrado ={
  x: 10,
  y: 10,
  w: 50,
  h: 50
}

criarQuadrado();

// atribuir um evento a cada tecla pressionada
window.addEventListener('keydown', teclaPressionada);

// funcao que pega a tecla e chama o movimento
function teclaPressionada(e) {
  let codigo = e.keyCode;
  // alert(codigo);

  if (codigo === 37) {
    quadrado.x-=5;
  }

  if (codigo === 39) {
    quadrado.x+=5;
  }

  if (codigo === 38) {
    quadrado.y-=5;
  }

  if (codigo === 40) {
    quadrado.y+=5;
  }

  criarQuadrado();

}


// gerar o elemento
function criarQuadrado() {
  // limpar a tela para gerar quadrado na nova posição
  // precisamos passar onde começa e onde termina a limpeza
  ctx.clearRect(0,0, meuCanvas.width, meuCanvas.height);
  ctx.fillStyle = '#DC143C';
  ctx.fillRect(quadrado.x, quadrado.y, quadrado.w, quadrado.h);
}
