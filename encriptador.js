document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("ingreso-texto");
  const imagen = document.querySelector(".no-encontrado");
  const mensajeEncontrado = document.querySelector(".encontrado");
  const resultadotext = document.querySelector(".mensaje h3");
  const buttonencrip = document.querySelector(".btn-uno");
  const buttondesencrip = document.querySelector(".btn-dos");
  const buttoncopiar = document.querySelector(".encontrado .btn-dos");
  
  // permite solo letras y espacios
  const regex = /^[a-z\s]*$/;

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
    imagen.classList.add("hidden");
    mensajeEncontrado.classList.remove("hidden");
    resultadotext.textContent = mensaje;
    buttoncopiar.classList.remove("hidden");
  }

  // Validación en tiempo real del texto ingresado
  textarea.addEventListener("input", () => {
    textarea.value = textarea.value.toLowerCase().replace(/[^a-z\s]/g, "");
  });

  // Encriptar con conversión automática a minúsculas
  buttonencrip.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textarea.value.toLowerCase(); // Convierte a minúsculas automáticamente
    
    if (regex.test(mensaje)) {
      const mensajeEncriptado = encriptarMensaje(mensaje);
      mostrarResultado(mensajeEncriptado);
    } else {
      alert("Por favor, ingresa solo letras minúsculas sin acentos.");
    }
  });

  // Desencriptar con conversión automática a minúsculas
  buttondesencrip.addEventListener("click", (e) => {
    e.preventDefault();
    const mensaje = textarea.value.toLowerCase(); // Convierte a minúsculas automáticamente

    if (regex.test(mensaje)) {
      const mensajeDesencriptado = desencriptarMensaje(mensaje);
      mostrarResultado(mensajeDesencriptado);
    } else {
      alert("Por favor, ingresa solo letras minúsculas sin acentos.");
    }
  });

  // copia, limpiar y restaurar 
  buttoncopiar.addEventListener("click", () => {
    const textoCopiado = resultadotext.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
      alert("Texto copiado al portapapeles");
      textarea.value = ""; // Limpia el textarea
      imagen.classList.remove("hidden"); // Muestra la imagen
      mensajeEncontrado.classList.add("hidden"); // Oculta el mensaje
    });
  });
});