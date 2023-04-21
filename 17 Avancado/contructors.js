const carro = {
  marca: 'Marca',
  preco: 0
}

// constructor é uma forma de criar um objeto com um padrao
// para apenas preencher os campos necessarios atraves de uma função construtora
// Na função construtora geralmente começa com a primeira letra maiuscula
// a constutora recebe parametro como toda função
function Carro(parametroMarca, parametroPreco) {
  this.marca = parametroMarca //this é usado pra se referir ao proprio objeto
  this.preco = parametroPreco
}

// Quando chamamos essa função é necessario usar a palavra new
// assim ele executa a função como construtora
const honda = new Carro('honda', 2000)
console.log(honda)

// É possivel fazer qualquer coisa dentro da função construtora, como adicionar
// valores e metodos
function Moto(parametroMarca, parametroPreco) {
  //aqui pegamos o valor do preco que vem quando é instanciada a classe
  // e multiplicamos por 1.22, la embaixo devolvemos o valor ja calculado
  const imposto = 1.22
  const precoComImposto = parametroPreco * imposto
  this.marca = parametroMarca
  this.preco = precoComImposto
}
// Nenhuma das variaveis na função construtora pode ser acessada de fora se não
// retornar ela com o this.
const yamaha = new Moto('yamaha 25cc', 'Preco com Impostos:' + 2000)
// se eu buscar por .imposto retorna undefined
console.log(yamaha.imposto)

// Exemplo de objeto com DOM

const Dom = {
  seletor: 'li',
  //esse element abaixo é igual element: function(){}
  element() {
    return document.querySelector(this.seletor)
  },
  ativar() {
    // tem de usar o this para poder usar o metodo elemento que esta dentro desse objeto
    this.element().style.color = 'red'
  }
}
// aqui posso executar esse metodo dentro do objeto
Dom.ativar()
// mas se eu quiser mudar o seletor para ul por exemplo posso fazer
Dom.seletor = 'ul'
// mas ai eu estou modificando o objeto se eu usar o ativar vai ativar só
// o ul e não mais o li, por isso temos que criar uma função construtora
// com ela é possivel fazer o ul e li junto se quisermos
Dom.ativar()

// esse mesmo objeto agora como função construtora
function DomConstrutor(seletor) {
  this.element = function () {
    return document.querySelector(seletor)
  }
  this.ativar = function (cor) {
    if (cor) {
      this.element().style.color = cor
    } else {
      this.element().style.color = 'blue'
    }
  }
}
// agora vamos criar o objeto usando o dom DomConstrutor
// usando o li de seletor

const li = new DomConstrutor('li')
// agora podemos ativar se quiser
li.ativar()
// agora temos dois objetos e não estamos sobre escrevendo o mesmo
// e nem precisamos criar um objeto inteiro para poder usar os metodos
const liLastChild = new DomConstrutor('li:last-child')
liLastChild.ativar()
// podemos enviar parametros pra um metodo de dentro da constutora
liLastChild.ativar('purple')

console.log('EXERCICIOS')

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou')
  }
}

function PessoaConstrutor(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.andar = function () {
    console.log(this.nome + ' andou')
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new PessoaConstrutor('João', 20)
const Maria = new PessoaConstrutor('Maria', 25)
const Bruno = new PessoaConstrutor('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function ListaConstrutor(seletor) {
  const elementsList = document.querySelectorAll(seletor)
  this.elements = elementsList
  this.addClass = function (classe) {
    elementsList.forEach(item => {
      item.classList.add(classe)
    })
  }
  this.removeClass = function (classe) {
    elementsList.forEach(item => {
      item.classList.remove(classe)
    })
  }
}

const listas = new ListaConstrutor('ul')
console.log(listas)
