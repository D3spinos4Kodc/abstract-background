document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
      const factor = 0.98; // Ajuste para la rapidez de seguimiento

      // Ajusta la posición actual en base a la posición objetivo
      curX += (tgX - curX) * factor;
      curY += (tgY - curY) * factor;
      // Ajusta la posición de la burbuja considerando su tamaño
      interBubble.style.transform = `translate(${Math.round(curX - interBubble.clientWidth / 2)}px, ${Math.round(curY - interBubble.clientHeight / 2)}px)`;

      requestAnimationFrame(move);
  }

  window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
  });

  move();
});