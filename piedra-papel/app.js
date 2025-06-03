function veredicto(user, pc) {
    if (user === pc) return "EMPATE";
    if (
        (user === "tijera" && pc === "papel") ||
        (user === "piedra" && pc === "tijera") ||
        (user === "papel" && pc === "piedra")
    ) return "GANASTE";
    return "PERDISTE";
}

function changeClass(mensaje, resultado) {
    mensaje.classList.remove("win", "lost", "draw");

    const clases = {
        "GANASTE": "win",
        "PERDISTE": "lost",
        "EMPATE": "draw"
    };

    mensaje.classList.add(clases[resultado]);
}

function jugar(user) {
    const opciones = ["piedra", "papel", "tijera"];
    const pc = opciones[Math.floor(Math.random() * 3)];
    const resultado = veredicto(user, pc);

    const mensaje = document.getElementById("result");
    const cardInfo = document.getElementById("card_info");

    changeClass(mensaje, resultado) // cambiamos la clase
    mensaje.innerText = resultado;


    cardInfo.innerHTML = `
    <p><strong>Tu elección:</strong> <span style="color: rgb(0, 255, 217);">${user}</span> </p>

    <p><strong>PC eligió:</strong> <span style="color: rgb(0, 255, 217);">${pc}</span></p>
  `;
}
