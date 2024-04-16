/* LER ARQUIVO
   - Pegar o elemento p (conteudoArquivo)
   - Alterar conteúdo do p
*/

const pConteudo = document.querySelector('p')

const conteudoArquivo = localStorage.getItem('conteudo-arquivo')

pConteudo.textContent = conteudoArquivo || 'Nenhum upload foi feito'