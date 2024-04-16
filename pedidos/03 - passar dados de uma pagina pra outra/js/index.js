/**
 *  Exercício de JS 5:
 *  - Dificuldade: Média
 * 
 *  Salvar o nome do usuário e recuperá-lo em outra página
 * 
 *  1. Implementar o submit do formulário
 *  2. Salvar o nome do usuário no localStorage
 *  3. Redirecionar o usuário para "http://127.0.0.1:5500/pages/welcome.html"
 *  4. Recuperar o nome do usuário na tela de "Welcome"
 */

const campoNome = document.querySelector('input')
const spanNome = document.querySelector('.alvo')

campoNome.addEventListener('input', dadosEvento => {
  spanNome.textContent = dadosEvento.target.value
})

const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  localStorage.setItem('username', campoNome.value)

  window.location.href = 'http://127.0.0.1:5500/pages/welcome.html'
})