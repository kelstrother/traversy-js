const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

//~ draw rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

//~ draw circle
ctx.fillStyle = "steelblue";
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

//~ draw lines
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

//~ draw text
ctx.font = '60px Arial';
ctx.lineWidth = 2;
ctx.fillStyle = 'maroon';
ctx.fillText('Fuck', 300, 100, 300)
ctx.strokeText('Fuck', 300, 360, 300)

//~ draw image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100))