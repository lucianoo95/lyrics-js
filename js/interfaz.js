import API from './api.js';

export const formSearch = document.querySelector('#formulario-buscar'),
  divSearch = document.querySelector('#buscar'),
  divResultados = document.querySelector('#resultado');

export const showMessageError = (message) => {
  const divMessages = document.querySelector('#mensajes');
  divMessages.innerHTML = `${message}`;
  divMessages.classList.add('error');

  setTimeout(() => {
    divMessages.innerHTML = '';
    divMessages.classList.remove('error');
    formSearch.reset();
  }, 3000);
}

export const displayLyric = (artist, song) => {
  const api = new API(artist, song);
  api.getLyrics()
    .then(data => {
      if (data.lyrics) {
        // Mostrar cancion
        const lyrics = data.lyrics;
        divResultados.textContent = `${lyrics}`;
      } else {
        // La cancion no existe
        showMessageError('La canción no existe..');
      }
      
    })
}
