//Estrutura basica de como criar um Objeto
var carro = {
  marca: 'honda',
  modelo: 'Civic'
}
console.log(carro.marca, carro.civic)
//Metodos são funções dentro do objeto
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    //esse this é para mostrar que quero um valor do proprio objeto
    //sem isso daria erro
    return this.lados * lado
  },
  tipo: function () {
    return 'Perfeito'
  },
  //outra forma de criar um metodo é passa a funcão direto
  cor(corEscolhida) {
    return `A cor escolhida foi ${corEscolhida}`
  }
}
//para mostrar o valo so chamar o objeto e a propriedade
console.log('lados', quadrado.lados)
//se for um metodo devo passar o valor se necessario
console.log('area', quadrado.area(5))
console.log('perimetro', quadrado.perimetro(5))
//sem valor na função
console.log('Tipo', quadrado.tipo())
//metodo direto
console.log(quadrado.cor('verde'))

//Existem metodos nativos como os abaixo
//me da o valor de pi
console.log(Math.PI)
//me da o valor aleatorio
console.log(Math.random())
//como o proprio console.log

//o conceito de acessar um metodo console.log chama dot notation

//posso adicionar novos metodos no meu objeto igual abaixo
//carro objeto criado no começo
carro.ano = 1994

console.log(carro)
//quando pega um valor chama-se GET quando adiciona SET
//exemplo GET
var modeloCarro = carro.modelo
//exemplo SET
carro.modelo = 'City'

/*
  LEMBRETE TUDO QUE TIVER FUNCÃO DENTRO DO OBJETO É UM METODO 
  O QUE NÃO É FUNÇÃO É UMA PROPRIEDADE
*/
//Abaixo um metodo
quadrado.perimetro()
//Abaixo uma propriedade
quadrado.cor

//EXECICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
  nome: 'Rodrigo',
  segundoNome: 'Gandhi',
  sobreNome: 'Oliveira'
}
// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function () {
  return `${this.nome} ${this.segundoNome} de ${this.sobreNome}`
  //sem template string
  //this.nome + ' ' + this.segundoNome + ' ' + this.sobreNome
}
// Modifique o valor da propriedade preco para 3000
var carroEX = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
carroEX.preco = 3000
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: '10 anos',
  latir(quemEstaPassando) {
    if (quemEstaPassando === 'mulher') {
      return 'não faz nada'
    } else {
      return 'latir'
    }
  }
}
//para descobrir as propriedades e metodos herdades só digitar.  na frente da variavel
// acesse 3 propriedades ou métodos de strings
var umaString = 'uma string'
//metodo
umaString.valueOf()
//propriedade
umaString.length
//metodo
umaString.toLowerCase()
// nomeie 5 propriedades ou métodos de elementos do DOM
//primeiro vamos acessar o html
var botao = document.querySelector('.btn')
//metodo
botao.remove()
//propriedade
botao.lastChild
//propriedade
botao.id

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
