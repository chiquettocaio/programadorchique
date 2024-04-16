/**
 * O que é JSON?
 * -> Método para se estruturar dados formato de objeto literal (JavaScript)
 *    que no fim das contas vira um texto
 * -> JavaScript Object Notation
 * -> Assim como acontece com objetos JS, o JSON é composto por chaves e valores
 * -> Amplamente utilizado na comunicação com APIs
 * -> Estrutura:
 *    -> Dados estruturados no formato de par chave-valor
 *    -> Não pode conter "," após o valor caso o mesmo não seja sucedido de outro
 *       par chave-valor 
 *    -> Aspas devem ser sempre duplas
 *    -> Não podem possuir funções
 *    -> Não podem possuir comentários
 * -> Principais vantagens do JSON:
 *    -> Simplicidade
 *    -> Leveza e rapidez no processamento
 *    -> Legibilidade
 *    -> Suporte nativo por parte da maioria das linguagens de programação
 */


// Exemplo de objeto literal JavaScript
const pessoa = {
  "nome": "Caio",
  'sobrenome': 'Chiquetto',
  idade: 25,
  ehBrasileiro: true,
  minhaFn: () => {
    console.log('Teste')
  }
}

pessoa.minhaFn()

// Exemplo acima em formato JSON
const pessoaJSON = {
  "nome": "Caio",
  "sobrenome": "Chiquetto",
  "idade": 25,
  "ehBrasileiro": true
}


/* TESTANDO UMA REQUISIÇÃO */

// Pegando dados
const baseURL = 'https://jsonplaceholder.typicode.com'
const postURL = `${baseURL}/posts`

fetch(postURL, { method: 'GET' })


// Enviando dados
const dadosParaSalvar = {
  title: 'Estudar JSON',
  content: 'Conteúdo do meu post'
}

fetch(postURL, {
  method: 'POST',
  body: JSON.stringify(dadosParaSalvar)
})