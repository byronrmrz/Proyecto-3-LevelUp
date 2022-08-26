var press  = document.getElementById("press");
var body = document.getElementById("body");
var color = document.getElementById("color")
var colores = ["aliceblu", "antiquewhite", "aquamarine", "brown", "chartreuse", "cornflowerblue", "cyan", "darkgoldenrod", "firebrick", "fuchsia", "gold", "gray", "greenyellow", "hotpink", "indigo", "lightgreen", "magenta", "maroon", "navy", "olive", "orange", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "seagreen","slateblue"];

press.addEventListener("click", ()=>{
    fondo()
})

function fondo(){
    var index = parseInt(Math.random() * colores.length);    
    body.style.backgroundColor = colores[index];
    color.innerHTML = colores[index];    
}


