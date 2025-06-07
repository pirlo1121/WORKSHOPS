function veredicto(user, pc) {
    if (user === pc) {
        return 'EMPATE'
    } else if (
        user === 'tijera' && pc === 'papel' ||
        user === 'piedra' && pc === 'tijera' ||
        user === 'papel' && pc === 'piedra'
    ) {
        return 'GANASTE'
    } else {
        return 'PERDISTE'
    }
}

function jugar(user) {
    const opciones = ['papel', 'tijera', 'piedra']
    const numAzar = Math.floor(Math.random() * 3)
    const pc = opciones[numAzar]
    const mensaje = document.getElementById('mensaje')
    const resultado = veredicto(user, pc)

    changeClass(mensaje, resultado)

    mensaje.innerHTML = `
    <p> ${resultado} </p>
    `

}

function changeClass(mensaje, resultado) {

    mensaje.classList.remove('win', 'lose', 'draw')

    const options = {
        'EMPATE': 'draw',
        'GANASTE': 'win',
        'PERDISTE': 'lose'
    }

    mensaje.classList.add(options[resultado])



}


// jugar();