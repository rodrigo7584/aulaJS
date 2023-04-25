// O prototipo sempre esta ligado a função
// quando cria uma função ele ja tem o objeto prototype
function teste() {
  return 1 + 1
}
// o prototype tmb aparece nas funções constutoras

function Construtor(nome) {
  this.nome = nome
}

// ja o construido como é um objeto e não uma função não tem prototype
const construido = new Construtor('rodrigo')

// como prototype é um objeto conseguimos adiciionar metodos a ele

Construtor.prototype.somar = function (numero1, numero2) {
  return numero1 + numero2
}

// dentro do meu objeto criado por essa função construtora consigo acessar
// metodo que criei no prototype

console.log(construido.somar(1, 2))

// tmb posso usar o metodo nome dentro do prototype

Construtor.prototype.multiplicar = function (numero1, numero2) {
  return `${this.nome} o resultado é ${numero1 * numero2}`
}

console.log(construido.multiplicar(2, 2))

// se acessarmos o __proto__ podemos ver todos os metodos e propriedades
// por exemplo podemos transformar um node list em um array para acessar
// os metodos disponiveis nativamente de um array

const lista = document.querySelectorAll('li')
// aqui vai retornar uma node list que é um array like e não array
console.log(lista)
// aqui mostra todos metodos disponiveis lembrando que para usar os metodos do
// proto não é necessario usar .__proto__ pode usar o metodo direto
console.log(lista.__proto__)
// aqui tranformamos em um array real
const listaArray = Array.prototype.slice.call(lista)
// e aqui vemos todos os metodos e propriedades nativas de um array
console.log(listaArray.__proto__)

// existe outro metodo que é o abaixo
const listaArray2 = Array.from(lista)
console.log(listaArray2)

// existe outro metodo interessante que é de Object ele retorna
// todas propriedades de um Objeto
console.log(Object.getOwnPropertyNames(listaArray))

console.log('EXERCICIOS')
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function PessoaConstrutor(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

const pessoa = new PessoaConstrutor('luciana', 'oliveira', '58')

PessoaConstrutor.prototype.nomecompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}
console.log(pessoa.nomecompleto())
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLAllCollection.prototype)
console.log(Document.prototype)
// Liste os construtores dos dados abaixo
const li = document.querySelector('li')

li
li.click
li.innerText
li.value
li.hidden
li.offsetLeft
li.click()

console.log(li.constructor.name)
console.log(li.click.constructor.name)
console.log(li.innerText.constructor.name)
console.log(li.value.constructor.name)
console.log(li.hidden.constructor.name)
console.log(li.offsetLeft.constructor.name)
console.log(li.click.constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name
console.log(li.hidden.constructor.name.constructor.name)
