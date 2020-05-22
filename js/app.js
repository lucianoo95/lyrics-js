import * as UI from './interfaz.js';

// Listenner
UI.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener datos del formulario.
  const artist = document.querySelector('#artista').value,
    song = document.querySelector('#cancion').value;

  if (artist === '' || song === '') {
    // Completar formulario
    UI.showMessageError('Error: Debes completar todos los campos..');
  } else {
    // Formulario completo , realizar consulta
    UI.displayLyric(artist, song);
  }

})
