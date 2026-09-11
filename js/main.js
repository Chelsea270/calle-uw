const boton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
    boton.textContent = abierto ? "X" : "☰";
});

menu.addEventListener("click", (evento) =>{
    if (evento.target.tagName === "A") {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
        boton.textContent = "☰";
    }
});

// Desenfoca el fondo de la portada a medida que se baja
const fondoPortada = document.querySelector(".portada__fondo");

if (fondoPortada) {
  let enEspera = false;

  window.addEventListener("scroll", () => {
    if (enEspera) return;
    enEspera = true;

    requestAnimationFrame(() => {
      const avance = Math.min(window.scrollY / window.innerHeight, 1);
      fondoPortada.style.filter = "blur(" + avance * 14 + "px)";
      fondoPortada.style.opacity = 1 - avance * 0.45;
      enEspera = false;
    });
  });
}
