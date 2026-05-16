// capturar datos
const input = document.getElementById('guess') // valor del usuario
const btnPlay = document.getElementById('play')
const btnReset = document.getElementById('reset')
const message = document.getElementById('message')
const tries = document.getElementById('tries')

// generar numero al Azar
const numAzar = Math.floor(Math.random() * 100 + 1)
let intentos = 0;

btnPlay.addEventListener('click', () => {
    intentos++
    tries.textContent = intentos
    const num = Number(input.value)
    console.log(numAzar)

    message.textContent = validateGame(num, numAzar)

})

function validateGame(num, numAzar) {
    if (num < 1 || num > 100) return 'Por favor, ingresa un numero valido'
    if (num === numAzar) return 'GANASTE'
    else if (num > numAzar) return 'Intenta con un numero menor'
    else return 'Intenta con un numero mayor'
}

btnReset.addEventListener('click', () => {
    const numAzar = Math.floor(Math.random() * 100 + 1)
    intentos = 0
    tries.textContent = intentos
    message.textContent = ''
    input.value = ''
})