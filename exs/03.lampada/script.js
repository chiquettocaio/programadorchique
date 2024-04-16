/**
 * Exercício de JS #04
 * -> Dificuldade: fácil
 * 
 * Desenvolver um sistema que acenda e apague a luz quando
 * a lâmpada for clicada
 * 
 * 1. QuerySelector da lâmpada e span
 * 2. Criar uma variável de controle: "lampadaEstaAcesa" 
 * 3. Adicionar um listener na lâmpada
 *  3.1 Inverter o valor da variável "lampadaEstaAcesa"
 *  3.2 Mudar o "src" da tag "img": "./assets/images/lampada-acesa.jpg",
 *      "./assets/images/lampada-apagada.jpg"
 *  3.3 Mudar a classe do "span": "on", "off"
 *  3.4 Mudar o textContent do "span": "acesa", "apagada"
 */

const lampada = document.querySelector('img')
const span = document.querySelector('span')

let lampadaEstaAcesa = false

lampada.addEventListener('click', () => {
  lampadaEstaAcesa = !lampadaEstaAcesa

  if (lampadaEstaAcesa) {
    lampada.src = './assets/images/lampada-acesa.jpg'
    span.className = 'on'
    span.textContent = 'acesa'
  } else {
    lampada.src = './assets/images/lampada-apagada.jpg'
    span.className = 'off'
    span.textContent = 'apagada'
  }
})