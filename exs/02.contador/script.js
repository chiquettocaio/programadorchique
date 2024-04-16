/**
 *  Exercício de JS 2:
 *  - Dificuldade: Fácil
 * 
 *  Desenvolver um programa onde o usuário possa incrementar e
 *  decrementar o contador. 
 * 
 *  1. Pegar os elementos "contador", "incrementar" e "decrementar"
 *  2. Criar variável de controle (valor do contador)
 *  3. Adicionar um listener nos botões para detectar cliques
 *  4. Criar rotinas para incrementar e decrementar o contador
 * 
 *  5. [BÔNUS OPCIONAL - Dificuldade fácil-média]: refatore o código e deixe-o
 *     completamente funcional, removendo assim repetições
 * 
 *     BENEFÍCIOS: código menos propenso a erros, código mais dividido e
 *     organizado, código reutilizável, menos repetições, menor probabilidade
 *     de efeitos colaterais (comportamentos inesperados)
 * 
 *     > "selecionarElementoHTML": retornar o valor querySelector
 *     > "incrementarContador": incrementar em 1 o valor de "valorContador"
 *     > "decrementarContador": decrementar em 1 o valor de "valorContador"
 *     > "atualizarContador": atualiza o valor do elemento HTML "contador"
 *     > "incrementar": "incrementarContador" e "atualizarContador"
 *     > "decrementar": "decrementarContador" e "atualizarContador"
 */

const contador = selecionarElementoHTML('.contador')
const decrementarBtn = selecionarElementoHTML('.decrementar')
const incrementarBtn = selecionarElementoHTML('.incrementar')

let valorContador = 0

decrementarBtn.addEventListener('click', decrementar)
incrementarBtn.addEventListener('click', incrementar)

function selecionarElementoHTML (seletor) {
  return document.querySelector(seletor)
}

function incrementarContador () {
  valorContador++
}

function decrementarContador () {
  valorContador--
}

function atualizarContador () {
  contador.textContent = valorContador
}

function incrementar () {
  incrementarContador()
  atualizarContador()
}

function decrementar () {
  decrementarContador()
  atualizarContador()
}