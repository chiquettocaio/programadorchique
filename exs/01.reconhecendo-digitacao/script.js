/**
 *  Exercício de JS 1:
 *  - Dificuldade: Fácil
 * 
 *  Desenvolver um programa onde o usuário possa inserir
 *  seu nome, e em tempo real (enquanto o usuário digita) mostrar o
 *  nome inserido pelo usuário na tela
 * 
 *  1. Pegar os elementos de input e span
 *  2. Adicionar um listener no input para pegar seu valor
 *  3. Modificar o nome dentro do span
 */

const campoNome = document.querySelector('input')
const spanNome = document.querySelector('.alvo')

campoNome.addEventListener('input', dadosEvento => {
  spanNome.textContent = dadosEvento.target.value
})
