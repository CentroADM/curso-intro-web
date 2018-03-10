

console.log( "escribir algo en consola" )

// un comentario de una línea

/*
unhacerAlgoCuandoClick()
comentario
multilínea
*/


function hacerAlgoCuandoClick()
{

  titulo = document.getElementById("el-titulo")

  posY = 500 * Math.random()

  posX = 1000 * Math.random()

  separacion = 15 * Math.random()

  titulo.style = "color:red; letter-spacing:"+separacion+"px; top:"+posY+"px; left:"+posX+"px;"

  // alert("hiciste click")

}








setTimeout(
  function() {
    console.log("algo sucede")
  },
  5000
)

setInterval(
  function() {
    hacerAlgoCuandoClick()
    // console.log("algo sucede muchas veces")
  },
  1000
)
