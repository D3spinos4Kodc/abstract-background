document.addEventListener('DOMContentLoaded', () => {
  const burbujaInteractiva = document.querySelector('.burbuja-interactiva');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function mover() {
    curX += (tgX - curX) / 10;
    curY += (tgY - curY) / 10;
    // Ajuste de las coordenadas para que la burbuja siga más de cerca al cursor
    burbujaInteractiva.style.transform = `translate(${Math.round(curX - burbujaInteractiva.offsetWidth / 2)}px, ${Math.round(curY - burbujaInteractiva.offsetHeight / 2)}px)`;
    requestAnimationFrame(mover);
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  mover();
});
