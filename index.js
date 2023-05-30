function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let carga = document.getElementById("carga");

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

  if (texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    carga.src= "./imagenes/encriptado.gif"
  } else{
    carga.src = "./imagenes/pregunta.gif";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    swal ("No mames", "Debes ingresar un texto.", "warning");
  }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let carga = document.getElementById("carga");

    let textoCifrado = texto
     .replace(/enter/gi,"e")
     .replace(/imes/gi,"i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

     if (texto.length !=0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      carga.src= "./imagenes/giphy.gif";
    } else {
     carga.src = "./imagenes/Loading_icon.gif";
     tituloMensaje.textContent = "Ningún mensaje fue encontrado"
     parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
     swal ("No mames", "Debes ingresar un texto.", "warning");
    }

}