/* COOKIES:
  -> COMO FUNCIONA: salva o dado nos cookies. Por padrão os cookies
     são apagados quando fechamos o navegador
  -> EMPECILHOS: precisa de uma mecância adicional para pegar
     apenas o valor "Victor"
  -> COMO FAZ: document.cookie = 'username=Victor'
*/

/* QUERY PARAMETERS:
  -> COMO FUNCIONA: o valor fica na URL no formato "?username=Victor"
  -> EMPECILHOS: precisa de mecânica adicional para pegar o valor. Exemplos:
     1. Uma similar ao que seria necessário com os cookies
     2. new URLSearchParams(window.location.search).get('username')
  -> COMO FAZ: só dar um jeito de fazer o dado ir parar na URL da seguinte forma:
     - www.meusite.com.br?username=Victor
       - O "?" delimita o que é domínio do site e o que é query parameter
       - Quando tivermos mais de um, utilizamos o "&"
         - www.meusite.com.br?username=Victor&pais=Brasil
*/

/* LOCAL STORAGE:
  -> COMO FUNCIONA: Salva no próprio navegador a informação, que fica lá até ser
     apagada manualmente
  -> EMPECILHOS: nenhum, jeito mais fácil de fazer
  -> COMO FAZ:
     - Pra salvar: localStorage.setItem('username', 'Victor')
     - Pra recuperar: localStorage.getItem('username')
*/

const span = document.querySelector('span')

span.textContent = localStorage.getItem('username')