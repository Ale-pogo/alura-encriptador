Encriptador y Desencriptador de Texto

Este proyecto es una aplicación web simple que encripta y desencripta texto utilizando un conjunto de sustituciones de letras. El texto ingresado se encripta reemplazando ciertas letras con cadenas específicas, y puede desencriptarse de vuelta a su forma original. La interfaz está diseñada tomando un modelo de FIGAMA de Alura.

// Características //

- Encriptación de texto: Convierte vocales en cadenas predefinidas.
- Desencriptación de texto: Restaura las cadenas encriptadas a las vocales originales.
- Validación: Solo permite letras minúsculas y espacios, convierte automaticamente las mayusculas a minusculas al escribirlas. No acepta simbolos ni caracteres especiales.
- Copia al portapapeles: El texto encriptado o desencriptado se puede copiar fácilmente.

// Reglas de Encriptación //

Las sustituciones son las siguientes:

- `e` -> `enter`
- `i` -> `imes`
- `a` -> `ai`
- `o` -> `ober`
- `u` -> `ufat`

// Uso //

1. Ingresa el texto que deseas encriptar o desencriptar.
2. Haz clic en el botón "Encriptar" para encriptar el texto o "Desencriptar" para desencriptarlo.
3. Si lo deseas, puedes copiar el resultado al portapapeles haciendo clic en el botón "Copiar".

// Tecnologías Utilizadas //

- HTML5
- CSS3 
- JavaScript

// Observacion //
Si el texto es copiado de otro lugar y pegado para encriptarlo, el encriptador quita las letras que tienen acentos, símbolos y caracteres especiales, por lo que las palabras que contengan acentos y caracteres especiales quedaran cortadas (esto no pude resolverlo).
