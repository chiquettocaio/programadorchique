const button = document.querySelector('button')

function gerarNovaPosicao () {
  const larguraTela = window.innerWidth
  const alturaTela = window.innerHeight
  const larguraBotao = 150
  const alturaBotao = 150
  
  const x = Math.round(Math.random() * larguraTela) - larguraBotao
  const y = Math.round(Math.random() * alturaTela) - alturaBotao

  return {
    x: x <= 0 ? 0 : x,
    y: y <= 0 ? 0 : y
  }
}

button.addEventListener('mouseenter', e => {
  const { x, y } = gerarNovaPosicao()
  button.style.cssText = `left: ${x}px; top: ${y}px;`
})