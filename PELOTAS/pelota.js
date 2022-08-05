/*
 * Practica de poo usando canvas
 * MLM
 * 2022/08/05
 */

/*
Cargar Recursos
*/
var c= document.getElementById("canvas");
var ctx=c.getContext("2d");
/*
 * Valores Iniciales
 */
var centro={x:0, y:0};
var radio=50;
var vel={x:6, y:3};
/*
 * Dibujar mundo
 */
function dibujar(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle="blue";
    ctx.arc(centro.x,centro.y,radio,0,2*Math.PI);
    ctx.stroke();
}
/*
 * Recalcular Valores
 */
function calcular()
{
    centro.x+=vel.x;
    centro.y+=vel.y;  
    if (centro.x>canvas.width-radio|| centro.x<=0) {
        vel.x*=-1;
    }
    if (centro.y>canvas.height-radio|| centro.x<=0){
        vel.y*=-1;
    }
    
}
/*
 * Ciclo de animación
 */
function animar()
{

    dibujar();
    calcular();
    requestAnimationFrame(animar);
}
    requestAnimationFrame(animar);



/*
*Circulos tomados de W3schools 
*El 95 es x, 50 es y, 40 es el radio,   
 var c = document.getElementById("canvas");
 var ctx = c.getContext("2d");
 ctx.beginPath();
 ctx.arc(95, 50, 40, 0, 2 * Math.PI);
 ctx.stroke();

 var c = document.getElementById("canvas");
 var ctx = c.getContext("2d");
 ctx.beginPath();
 ctx.arc(420, 70, 200, 0, 2 * Math.PI);
 ctx.stroke();
 */
 