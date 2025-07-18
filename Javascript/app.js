// Crear yna funcion que determine si una palabra es palindromo o no

let palabra = 'carretera' // es palindromo
function esPalindromo(str) {
    let limpia = str.toLocaleLowerCase()
    return limpia === limpia.split('').reverse().join('')
}
const resultado = esPalindromo('recon')

// funcion para contar vocales
function contVocales(texto){
    const vocales = 'aeiouáéíóú'
    return texto.toLowerCase().split('').filter(l => vocales.includes(l)).length
}
// console.log(contVocales('EXPRESS'))

// pares, palabras

let pares = [1,2,3,4,5,6,7,8,9,10,11]
function contarPares(arr){
    return arr.filter(n => n % 2 === 0).length
}
// console.log(contarPares(pares))

// contar palabras de un texto
let texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo et sapiente   consectetur delectus minus cupiditate, officiis pariatur amet. Quidem rem itaque maiores doloremque consequuntur veritatis maxime eligendi quae minima.'

let texto2 = ' Hola soy un  texto'

function contarPalabras(parrafo){
    let limpio = parrafo.trim();
    if(limpio == '') return false;

    const palabras = limpio.split(' ').filter(p => p !== '')

    return palabras.length

}

console.log(contarPalabras('  '))



