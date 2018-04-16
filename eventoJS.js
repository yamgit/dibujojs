function dibujando(color,xIN,yIN,xFI,yFI)
{
	dibujo.beginPath();
	dibujo.strokeStyle=color;
	dibujo.moveTo(xIN,yIN);
	dibujo.lineTo(xFI,yFI);
	dibujo.stroke();
	dibujo.closePath();
}


function dibujoPorClick()
{
var numeroLineas=parseInt(texto.value);
var espacio=marco.width/numeroLineas;
var yInicial1,xFinal1,xInicial2,yFinal2,xInicial3,yFinal3,xFinal4,yInicial4;
var linea=0;
var color="#D7DF01";

while(linea<numeroLineas)
{
	yInicial4=yInicial1=linea*espacio;	
	xInicial2=xFinal1=espacio*(linea+1);
	yFinal3=yFinal2=300-(linea*espacio);
	xFinal4=xInicial3=290-(linea*espacio);
	dibujando(color,0,yInicial1,xFinal1,300);
	dibujando(color,xInicial2,0,0,yFinal2);
	dibujando(color,xInicial3,0,300,yFinal3);
	dibujando(color,300,yInicial4,xFinal4,300);
	linea++;
}

dibujando(color,1,1,1,299);
dibujando(color,1,299,299,299);
dibujando(color,299,299,299,1);
dibujando(color,299,1,1,1);

}

//Marco del dibujo de html  a javascript
var marco=document.getElementById("marquito");
var dibujo=marco.getContext("2d");

//Caja de texto
var texto=document.getElementById("textoLineas");

//Boton 
var boton=document.getElementById("botoncito");
//Evento que llama la accion del boton
boton.addEventListener("click",dibujoPorClick);

