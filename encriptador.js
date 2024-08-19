document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("ingreso-texto");
  const muneco = document.querySelector(".no_encontrado");
  const mensajeEncontrado = document.querySelector(".mensaje_encontrado");
  const resultadotext = document.querySelector(".mensaje h3");
  const buttonencrip = document.querySelector(".button-primary");
  const buttondesencrip = document.querySelector(".button-secondary");
  const buttoncopiar = document.querySelector(".mensaje_encontrado .button-secondary");

  const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
  ];

  function encriptarMensaje(mensaje) {
    return mensaje.split("").map(letra => {
      for (let [original, encriptada] of llaves) {
        if (letra === original) return encriptada;
      }
      return letra;
    }).join("");
  }

  function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    llaves.forEach(([original, encriptada]) => {
      let regex = new RegExp(encriptada, "g");
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, original);
    });
    return mensajeDesencriptado;
  }

  function mostrarResultado(mensaje) {
    muneco.classList.add("hidden");
    mensajeEncontrado.classList.remove("hidden");
    resultadotext.textContent = mensaje;
    buttoncopiar.classList.remove("hidden");
  }

  // Encriptar
  buttonencrip.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textarea.value.toLowerCase(); // Convierte a minúsculas automáticamente
    const mensajeEncriptado = encriptarMensaje(mensaje);
    mostrarResultado(mensajeEncriptado);
  });

  // Desencriptar
  buttondesencrip.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textarea.value.toLowerCase(); // Convierte a minúsculas automáticamente
    const mensajeDesencriptado = desencriptarMensaje(mensaje);
    mostrarResultado(mensajeDesencriptado);
  });

  // Limpiar pantalla / Copiar
  buttoncopiar.addEventListener("click", () => {
    const textoCopiado = resultadotext.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
      alert("Texto copiado al portapapeles");
      limpiarPantalla();
    });
  });

  function limpiarPantalla() {
    textarea.value = ""; // Limpiar el textarea
    resultadotext.textContent = ""; // Limpiar el mensaje de resultado
    mensajeEncontrado.classList.add("hidden"); // Ocultar el resultado
    buttoncopiar.classList.add("hidden"); // Ocultar el botón de copiar
    muneco.classList.remove("hidden"); // Mostrar la imagen y el mensaje inicial
  }
});