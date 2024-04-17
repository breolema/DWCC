// Obter o canvas e o contexto 2D
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


// Definir o raio do círculo
let raio = Math.min(canvas.width, canvas.height) / 2 - 10;


// Calcular as coordenadas do centro do canvas
let centroX = canvas.width / 2;
let centroY = canvas.height / 2;


// Limpar o canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);


// Dibuxar o círculo verde
ctx.beginPath();
ctx.arc(centroX, centroY, raio, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();


// Configurar o texto da data do sistema
let dataSistema = new Date().toLocaleDateString();
ctx.font = "16px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.textBaseline = "middle";


// Dibuxar o texto da data no centro do círculo
ctx.fillText(dataSistema, centroX, centroY);