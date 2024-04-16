/* FOR, FOR..OF, FOR..IN, FOR EACH */

/* FOR TRADICIONAL */
for (let i = 0; i < 1000; i++) {
  console.log(`Meu nome é Caio e eu gosto do número ${i}`)
}

/* FOR..OF (APENAS PARA ARRAYS E OUTRAS ESTRUTURAS ITERAVEIS) */
let nomes = ['Caio', 'Ramon', 'Victor', 'Pedro', 'Zoe']
for (let nome of nomes) {
  console.log(nome)
}

/* FOR..IN (PARA OBJETOS) */
let pessoa = {
  nome: 'Caio',
  idade: 25,
  rg: '11.111.111-1',
  cidadeNascimento: 'São Paulo'
}

for (let chave in pessoa) {
  console.log('CHAVE:', chave)
  console.log('VALOR:', pessoa[chave])
}

let carros = ['Palio tenebroso', 'Uno com escada', 'Corsa rebaixado']
carros.forEach(carro => console.log(`Hoje eu tô monstrão dirigindo um ${carro}`))