/* ASYNC/AWAIT - PROGRAMAÇÃO ASSÍNCRONA
   - ASYNC: transforma a função em uma promise
   - AWAIT: espera pelo retorno de outras promises
     - A função precisa ter o async
*/

function gerarPromise (delay, valueToResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(valueToResolve), delay)
  })
}

/* RELEMBRANDO (CÓDIGO ASSÍNCRONO) */
// const p1 = gerarPromise(3000, 25)
// const p2 = gerarPromise(500, 30)
// const p3 = gerarPromise(1000, 45)

// p1.then(valor => console.log('P1', valor))
// p2.then(valor => console.log('P2', valor))
// p3.then(valor => console.log('P3', valor))




/* ASYNC/AWAIT - CÓDIGO DEIXA DE SER ASSÍNCRONO */
// async function promisesComAsyncAwait () {
//   const p1 = await gerarPromise(10000, 25)
//   console.log('DEPOIS P1')
//   const p2 = await gerarPromise(500, 30)
//   console.log('DEPOIS P2')
//   const p3 = await gerarPromise(1000, 45)
//   console.log('DEPOIS P3')

//   console.log('O VALOR TOTAL DAS PROMISES É', p1 + p2 + p3)
// }

// promisesComAsyncAwait()




/* AQUI PRECISA DO .THEN PRA PEGAR O RESULTADO */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log('DADOS DA API [PROMISE]', json))

/* AQUI NÃO */
// async function pegarValorAPI () {
//   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const dadosJson = await data.json()

//   console.log('DADOS DA API [ASYNC/AWAIT]', dadosJson)
// }

// pegarValorAPI()