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

// Desenfoca la foto del callejon a medida que se baja.
// La foto vive en body::before, y a un pseudo-elemento no se le puede
// tocar el estilo desde JS. Lo que si se puede es cambiarle una variable
// CSS al body: el CSS hace filter: blur(var(--desenfoque)).
let enEspera = false;

window.addEventListener("scroll", () => {
  if (enEspera) return;
  enEspera = true;

  requestAnimationFrame(() => {
    const avance = Math.min(window.scrollY / window.innerHeight, 1);
    document.body.style.setProperty("--desenfoque", avance * 7 + "px");
    enEspera = false;
  });
});
