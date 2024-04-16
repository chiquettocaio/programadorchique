/* FAZER UPLOAD DO ARQUIVO
   - Pegar os elementos de input e p (nomeDoArquivo)
   - Listener de "change" no input
     - Ler conteúdo do arquivo
     - Alterar conteudo do p: nome do arquivo
     - Salver conteudo no localStorage
*/

const fileInput = document.querySelector('input')
const nomeArquivoP = document.querySelector('p')

limparLocalStorage()

fileInput.addEventListener('change', e => {
  const files = e.target.files
  
  if (files.length > 0) {
    lerArquivo(files[0])
    mudarConteudoP(files[0].name)
  }
})

function mudarConteudoP (conteudo) {
  nomeArquivoP.textContent = conteudo
}

function lerArquivo (file) {
  const reader = new FileReader()

  reader.addEventListener('load', e => {
    salvarLocalStorage(e.target.result)
  })

  reader.readAsText(file)
}

function salvarLocalStorage (conteudo) {
  localStorage.setItem('conteudo-arquivo', conteudo)
}

function limparLocalStorage () {
  localStorage.removeItem('conteudo-arquivo')
}