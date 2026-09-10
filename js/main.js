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


