/**
 * Array:
 * -> Utilizado para agrupar dados (conjunto, matriz)
 * -> Criados a partir dos colchetes: []
 * -> Identificador (index) é sempre -1
 * -> Tamanho do array: .length
 * -> Acessar posição: array[posicao]
 * -> Reatribuir valor: array[posicao] = 'novo valor'
 * -> Adicionar no fim: push
 * -> Adicionar no começo: unshift
 * -> Remover do fim: pop
 * -> Remover do começo: shift
 * 
 * Observação: Variáveis por referência, apontam para a memória
 */

const conjunto = ['A', 'B', 'C', 'D', 'E']

conjunto.push('F')
conjunto.unshift('-A')
conjunto.pop()
conjunto.shift()
console.log(conjunto)


/**
 * Objetos:
 * -> Estrutura para representar dados mais complexos em formato de chave-valor
 * -> Criados a partir das chaves: {}
 * -> Estrutura muito variável: aspas duplas, aspas simples, trailing comma, etc
 * -> Pode conter qualquer coisa como valor
 * -> Acessar propriedade: "objeto.propriedade" ou "objeto['propriedade']"
 * -> Reatribuir valor: objeto.propriedade = 'novo valor'
 * -> Adicionar nova propriedade: objeto.minhaNovaProp = 'valor'
 * -> Remover propriedade: delete objeto.propriedade
 * -> Chaves podem ser dinâmicas: [minhaVariavel]: 'valor'
 * 
 * Observação: Variáveis por referência, apontam para a memória
 */

const teste = 'sadasdsadassadasd'

const pessoa = {
  [teste]: '123123213213',
  nome: 'Caio',
  idade: 25,
  minhaFn: () => {
    console.log(123)
  },
  documentos: {
    rg: {
      numero: '11.111.111-1',
      emissor: 'asdsadasd'
    }
  }
}

pessoa['nome'] = 'Oliver'
delete pessoa.nome

console.log(pessoa.documentos.rg.numero)