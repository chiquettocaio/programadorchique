/**
   OPERADORES LÓGICOS
   AND/E => &&
   OR/OU => ||
   NOT/NEGAÇÃO => !
 */

/* E: TUDO TEM QUE DAR TRUE */
let pegueiTudo = true
let tenhoDinheiro = true

if (pegueiTudo && tenhoDinheiro) {
  console.log('DEU TUDO CERTO!')
} else {
  console.log('ALGO DEU ERRADO')
}


/* OU: PELO MENOS 1 TEM QUE DAR TRUE */
pegueiTudo = true
tenhoDinheiro = true
const toComCartao = false

if (pegueiTudo && (tenhoDinheiro || toComCartao)) {
  console.log('DEU TUDO CERTO!')
} else {
  console.log('ALGO DEU ERRADO')
}

/* OU:
   - ESCOLHENDO ENTRE DOIS VALORES
   - SE O PRIMEIRO FOR FALSE DE ALGUM JEITO, REJEITA */
console.log(0 || 'Programador Chique 1')
console.log('' || 'Programador Chique 2')
console.log(true || 'Programador Chique 3')
console.log(false || 'Programador Chique 4')
console.log('Oi' || 'Programador Chique 5')
console.log('    ' || 'Programador Chique 6')
console.log(123123 || 'Programador Chique 7')
console.log(-123123 || 'Programador Chique 8')
console.log(-123123 || 'Programador Chique 9')
console.log(null || 'Programador Chique 10')
console.log(undefined || 'Programador Chique 11')

/* NOT: INVERTE O VALOR BOOLEANO */
const ehMenorDeIdade = false

if (!ehMenorDeIdade) {
  console.log('PODE BEBER MAS COM MODERAÇÃO HEIN!')
} else {
  console.log('SÓ PODE BEBER SUCO TANG')
}