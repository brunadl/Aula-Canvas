// ctx = contexto

desenha();

function desenha() {
  //recuperar o canvas
  let canvas = document.querySelector('#canvas');
  // console.log(canvas);

  // definir o contexto (ambiente) do canvas, na real é ela que usaremos para o desenho
  let ctx = canvas.getContext('2d');

  // fillStyle - definir a cor do elemento, sempre antes de criar o próprio se não, não funciona
  ctx.fillStyle = '#DC143C'

  // fillRect - desenha um elemento - quadrados(left, top, width, height) - dentro do ambiente, na cor preta
  ctx.fillRect(25,25,100,100);

  // clearRect - apaga um quadrado de um determinado tamanho
  ctx.clearRect(45,45,60,60);

  // strokeRect - desenhar uma borda em volta do quadrado que está vazia
  ctx.strokeRect(50,50,50,50);

  // aumenta o elemento e ele desce, pra baixo
  ctx.fillRect(125,125,100,100);
  ctx.fillRect(25,225,100,100);

}
