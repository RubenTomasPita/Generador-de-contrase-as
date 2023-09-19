// Aqui obtenemos los elementos DOM
const generateBtn = document.getElementById('generate-btn');
const generatedPasswordInput = document.getElementById('generated-password');

// La funcion para generar una contraseña
function generarContraseña() {
  
    // Obtener la longitud de la contraseña ingresada por el usuario
  const length = document.getElementById('inputLength').value;
  
  // Los caracteres permitidos para la contraseña
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?/.,;';

  // Aqui se genera la contraseña
  let contraseña = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres.charAt(randomIndex);
  }

  // Mostramos la contraseña generada en el input
  generatedPasswordInput.value = contraseña;
}

// Asociamos el evento click al botón de generar contraseña y terminamos
generateBtn.addEventListener('click', generarContraseña );