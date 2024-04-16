const h1 = document.querySelector('h1')

const sentences = [
  'Pedido do inscrito Ramon',
  'Espero ter ajudado vocês',
  'Curte e compartilha \\o/'
]

let iterations = 1
const ITERATION_TIME = 6000

setInterval(() => {
  h1.classList.remove('typewriter-animation')

  setTimeout(() => {
    h1.textContent = sentences[iterations]
    h1.classList.add('typewriter-animation')
    iterations = iterations < 2 ? iterations + 1 : 0
  }, 50);
}, ITERATION_TIME)