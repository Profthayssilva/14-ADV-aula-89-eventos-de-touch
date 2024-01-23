// Declaração de variáveis globais
var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

// Obtém referência para o elemento canvas e seu contexto 2D
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// Obtém a largura da tela
var width = screen.width;

// Ajusta a largura e a altura do canvas dependendo da largura da tela
newWidth =  screen.width - 70; 
newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

// Adiciona um ouvinte de evento para o toque (touchstart) no canvas
canvas.addEventListener("touchstart", my_touchstart);

// Função chamada no início do toque
function my_touchstart(e) {
    console.log("my_touchstart");

    // Atividade Adicional: Obtém valores de cor e largura da linha do HTML
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    // Fim da Atividade Adicional

    // Obtém as coordenadas do toque em relação ao canvas
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

// Adiciona um ouvinte de evento para o movimento do toque (touchmove) no canvas
canvas.addEventListener("touchmove", my_touchmove);

// Função chamada durante o movimento do toque
function my_touchmove(e) {
    console.log("my_touchMove");

    // Obtém as coordenadas do toque em relação ao canvas
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    // Configura o contexto para desenho
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    // Move para a última posição e desenha uma linha até a posição atual
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    // Atualiza as últimas coordenadas
    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
}

// Função para limpar a área do canvas
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
