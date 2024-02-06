let canvas = document.getElementById("Mycanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", cliquei)

function cliquei(e){
    

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;
desenharcirculo(mouseX, mouseY);
}


function desenharcirculo(mouseX, mouseY){
    let cor = document.getElementById("cor").value;
    let largura = document.getElementById("largura").value;
    
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}

function limparcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}