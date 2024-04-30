/* C - Create (Criar)
   R - Read (Ler)
   U - Update (Atualizar)
   D - Delete (Deletar)

   O termo CRUD é mais associado ao
   BANCO DE DADOS (DATABASE)
*/

const pessoas = []

// debugger
/* CREATE (CRIAR NOVO REGISTRO) */
// const novaPessoa = {
//   id: 1,
//   nome: 'Daniel',
//   profissao: 'Dev'
// }

// pessoas.push(novaPessoa)
// atualizarTela()

// /* READ (LER UM REGISTRO) */
// const pessoa = pessoas[0]

// /* UPDATE (ATUALIZAR UM REGISTRO) */
// pessoa.nome = 'Caio'
// atualizarTela()

// /* DELETE (REMOVER UM REGISTRO) */
// pessoas.splice(0, 1)
// atualizarTela()

















debugger
DB_salvar({ nome: 'Daniel', profissao: 'Dev' })
DB_salvar({ nome: 'Caio', profissao: 'Dev' })
DB_salvar({ nome: 'Raimundo', profissao: 'Vendedor' })
DB_salvar({ nome: 'Zoe', profissao: 'Calopsita' })

const daniel = DB_pesquisar(1)
const raimundo = DB_pesquisar(3)
const caio = DB_pesquisar(2)
const zoe = DB_pesquisar(4)

DB_atualizar({ id: daniel.id, profissao: 'Tech Lead' })
DB_atualizar({ id: caio.id, profissao: 'CEO' })
DB_atualizar({ id: raimundo.id, nome: 'Raimundão da massa' })

DB_deletar(zoe.id)
























/* AS FUNÇÕES ABAIXO MANIPULAM O
   BANCO DE DADOS (Database) */

// CREATE
function DB_salvar (pessoa) {
  const id = pessoas.length + 1
  pessoas.push({ id, ...pessoa })
  atualizarTela()
}

// READ
function DB_pesquisar (id) {
  return pessoas.find(p => p.id === id)
}

// UPDATE
function DB_atualizar (pessoaAtualizada) {
  const index = pegarPosicaoPessoa(pessoaAtualizada.id)
  
  pessoas[index] = {
    ...pessoas[index],
    ...pessoaAtualizada
  }

  atualizarTela()
}

// DELETE
function DB_deletar (id) {
  const index = pegarPosicaoPessoa(id)
  pessoas.splice(index, 1)
  atualizarTela()
}

// AUXILIARES
function pegarPosicaoPessoa (id) {
  return pessoas.findIndex(p => p.id === id)
}

function atualizarTela () {
  const target = document.querySelector('.target')
  target.innerHTML = ''

  for (let pessoa of pessoas) {
    const li = document.createElement('li')
    li.textContent = `ID: ${pessoa.id} - NOME: ${pessoa.nome} - PROFISSÃO: ${pessoa.profissao}`
    target.appendChild(li)
  }
}