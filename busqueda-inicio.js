// Función de búsqueda y filtrado desde la página principal
function filtrarProductosInicio() {
  const entradaBusqueda = document.getElementById('busqueda-input-inicio');
  const filtroCategoria = document.getElementById('categoria-filtro-inicio');

  const termino = entradaBusqueda.value.toLowerCase().trim();
  const categoriaSeleccionada = filtroCategoria.value;

  let url = 'catalogo/catalogo.html';

  if (termino.length === 0 && !categoriaSeleccionada) {
    window.location.href = url;
    return;
  }

  if (termino) {
    url += '?busqueda=' + encodeURIComponent(termino);
  }
  if (categoriaSeleccionada) {
    url += (termino ? '&' : '?') + 'categoria=' + encodeURIComponent(categoriaSeleccionada);
  }

  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const entradaBusqueda = document.getElementById('busqueda-input-inicio');
  const filtroCategoria = document.getElementById('categoria-filtro-inicio');

  if (entradaBusqueda) {
    entradaBusqueda.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') filtrarProductosInicio();
    });
  }

  if (filtroCategoria) {
    filtroCategoria.addEventListener('change', filtrarProductosInicio);
  }
});
