/**
 * PROMISE - PROGRAMAÇÃO ASSÍNCRONA
 * - Estados:
 *   - pending: estado inicial, não foi concluída nem rejeitada
 *   - fulfilled: operação concluída com sucesso
 *   - rejected: operação falhou
 * - Métodos:
 *   - then: executado quando a promise é resolvida com sucesso
 *   - catch: executado quando a promise falha
 *   - finally: executado ao final de tudo
 */

/* EXEMPLO 1 - CÓDIGO SÍNCRONO */
const idade = 20
const idadeMultiplicada = idade * 5
console.log(idadeMultiplicada)




/* EXEMPLO 2 - CRIAÇÃO DE UMA PROMISE */
// const minhaPromise = new Promise((resolve, reject) => {
//   // reject(123123213)

//   setTimeout(() => {
//     resolve('TUDO CERTINHO')
//     // reject('TUDO ERRADO')
//   }, 2000);
// })

/* Pegando o resultado com o ".then"
   Pegando o erro com o ".catch"
   Executando código final com o ".finally" */
// minhaPromise
//   .then(resultado => console.log('THEN:', resultado))
//   .catch(err => console.log('CATCH:', err))
//   .finally(() => console.log('FINALLY'))





/* EXEMPLO 3 - UTILIZANDO A FETCH API */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(responseJSON => console.log({ responseJSON }))





/* EXEMPLO 4 - VÁRIAS ATIVIDADES ASSÍNCRONAS AO MESMO TEMPO */
// function generatePromise (delay, valueToResolve) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(valueToResolve), delay)
//   })
// }

// console.log('=> ANTES DA CRIAÇÃO DAS PROMISES')

// const promise1 = generatePromise(4000, 'PRIMEIRA PROMISE')
// const promise2 = generatePromise(1000, 'SEGUNDA PROMISE')
// const promise3 = generatePromise(3000, 'TERCEIRA PROMISE')
// const promise4 = generatePromise(2000, 'QUARTA PROMISE')

// console.log('=> DEPOIS DA CRIAÇÃO DAS PROMISES')

// promise1.then(response => console.log(response))
// promise2.then(response => console.log(response))
// promise3.then(response => console.log(response))
// promise4.then(response => console.log(response))

// console.log('=> DEPOIS DOS MÉTODOS DAS PROMISES')