const ul = document.querySelector('ul')

const valoresListagem = [
  'Hello, world!',
  'Segundo item',
  'Dia 08 de Março',
  'Feliz dia das mulheres!!!!!',
  'Teste',
  'Programador Chique',
  'Listagem dinâmica'
]

for (const valorAtual of valoresListagem) {
  const li = document.createElement('li')
  li.textContent = valorAtual
  ul.appendChild(li)
}
