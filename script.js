document.addEventListener('DOMContentLoaded', () => {

  // ===== TITULO =====
  try {
    const titulo = document.getElementById('titulo-animado');
    if (titulo) {
      const texto = "FUJA DA\nINSTALAÇÃO";
      let i = 0;
      titulo.innerHTML = "";
      function digitar() {
        if (i < texto.length) {
          titulo.innerHTML += texto[i] === "\n"? "<br>" : texto[i];
          i++;
          setTimeout(digitar, 90);
        }
      }
      digitar();
    }
  } catch (e) { console.log("Erro titulo:", e) }

  // ===== ZOOM =====
  try {
    const imagens = document.querySelectorAll('.mapa img');
    imagens.forEach(img => {
      img.addEventListener('click', () => {
        imagens.forEach(o => { if (o!== img) o.classList.remove('zoom'); });
        img.classList.toggle('zoom');
      });
    });
  } catch (e) { console.log("Erro zoom:", e) }

});


