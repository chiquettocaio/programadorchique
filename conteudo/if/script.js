/* EXEMPLO 1 - IF */
let conviteValido = true

if (conviteValido) {
  console.log('Bem vido à festa!')
}

/* EXEMPLO 2 - IF, ELSE */
let idade = 10

if (idade >= 18) {
  console.log('O meliante é um adulto!')
} else {
  console.log('O meliante ainda não é um adulto!')
}

/* EXEMPLO 3 - IF, ELSE IF, ELSE */
idade = 20

if (idade >= 18) {
  console.log('O meliante é um adulto!')
} else if (idade >= 14) {
  console.log('O meliante é um adolescente!')
} else if (idade >= 10) {
  console.log('O meliante é um pré-adolescente!')
} else if (idade >= 4) {
  console.log('O meliante é uma criança!')
} else {
  console.log('O meliante é jovem demais para ser classificado!')
}