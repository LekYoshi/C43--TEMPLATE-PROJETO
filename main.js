function setup() {
  createCanvas(400, 400);
  print("Este é meu programa");
}

function draw() {
// Preencha a tela com cinza claro, cobrindo as imagens anteriores  
    background(220);

  // Definir a cor de preenchimento para cinza escuro
  fill(50);
  // Desenhe um círculo que segue o mouse
  ellipse(mouseX, mouseY, 10);
}