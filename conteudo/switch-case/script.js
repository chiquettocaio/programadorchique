/* EXEMPLO 1: SWITCH..CASE */
let fruta = 'Banana'

switch (fruta) {
  case 'Melancia':
    console.log('A fruta é uma melancia')
    break
  case 'Banana':
    console.log('A fruta é uma banana')
    break
}

/* EXEMPLO 2 - CLÁUSULA "DEFAULT" */
// let fruta = 'Abacaxi'

// switch (fruta) {
//   case 'Melancia':
//     console.log('A fruta é uma melancia')
//     break
//   case 'Banana':
//     console.log('A fruta é uma banana')
//     break
//   default:
//     console.log('Fruta não identificada')
// }


/* EXEMPLO 3 - CRIANDO ESCOPO DE BLOCO PARA CADA CASE */
// let fruta = 'Melancia'

// switch (fruta) {
//   case 'Melancia': {
//     let nomeEmIngles = 'Watermelon'
//     console.log(`Melancia em inglês é ${nomeEmIngles}`)
//     break
//   }
//   case 'Banana': {
//     let nomeEmIngles = 'Banana'
//     console.log(`Banana em inglês é ${nomeEmIngles}`)
//     break
//   }
//   default:
//     console.log('Fruta não identificada')
// }


/* EXEMPLO 4 - FALL-THROUGH */
// let fruta = 'Melancia'

// switch (fruta) {
//   case 'Melancia':
//   case 'Banana':
//   case 'Maça':
//   case 'Manga':
//     console.log(`Sim senhor, nós vendemos ${fruta}!`)
//     break
//   case 'Melao':
//   case 'Laranja':
//   case 'Limao':
//     console.log(`Desculpe senhor, no momento não temos ${fruta}`)
//     break
//   default:
//     console.log('Nós não conhecemos essa fruta, senhor')
// }

/* EXEMPLO 5 - "DEFAULT" NO MEIO DOS CASES */
// let idade = 5

// switch (idade) {
//   case 10:
//     console.log('A idade é igual a 10')
//     break
//   default:
//     console.log("Idade não identificada")
//     break
//   case 5:
//     console.log('A idade é igual a 5')
//     break
//   case 1:
//     console.log('A idade é igual a 1')
//     break
// }


/* EXEMPLO 6 - SWITCH..CASE FUNCIONANDO IGUAL IF..ELSE */
// let idade = 20

// switch (true) {
//   case idade >= 18:
//     console.log('O meliante é um adulto!')
//     break
//   case idade >= 14:
//     console.log('O meliante é um adolescente!')
//     break
//   case idade >= 10:
//     console.log('O meliante é um pré-adolescente!')
//     break
//   case idade >= 4:
//     console.log('O meliante é uma criança!')
//     break
//   default:
//     console.log('O meliante é jovem demais para ser classificado!')
// }