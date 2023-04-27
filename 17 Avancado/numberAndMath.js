// construtor Number constroi numero
// e como todo construtor possui seus metodos e prorpiedades
const numeroDireto = 100
const numeroConstrutor = new Number(200)

// NUMBER.ISNAN() E NUMBER.ISINTEGER();
// isNaN() é um método de Number, ou seja, não faz parte to protótipo.
// isInteger() verifica se é uma integral.

Number.isNaN(NaN) // true pq nan não é numero entao ta certo
Number.isNaN(4 + 5) // false pq é numero

Number.isInteger(20) // true pq é inteiro
Number.isInteger(23.6) // false pq não é um numero inteiro

// NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
// parseFloat() serve para retornarmos um número a partir de uma string.
// A String deve começar com um número. parseInt recebe também um segundo
// parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50') // Mesma função sem o Number
Number.parseFloat('99.50') // 99.5
Number.parseFloat('100 Reais') // 100
Number.parseFloat('R$ 100') // NaN

parseInt('99.50', 10) // 99
parseInt(5.43434355555, 10) // 5
Number.parseInt('100 Reais', 10) // 100

// N.TOFIXED(DECIMAIS)
// Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99
preco.toFixed() // 3

const carro = 1000.455
carro.toFixed(2) // 1000.46

const preco2 = 1499.49
preco2.toFixed() // 1499

// N.TOSTRING(RADIX)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99
preco.toString(10) // '2.99'

// N.TOLOCALESTRING(LANG, OPTIONS);
// Formata o número de acordo com a língua e opções passadas.

const preco4 = 59.49
preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // $59.49
preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // R$ 59,49

// MATH
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303

// todos objetos do math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.
//ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
//round() arredonda para o número integral mais próximo.

Math.abs(-5.5) // 5.5
Math.ceil(4.8334) // 5
Math.ceil(4.3) // 5
Math.floor(4.8334) // 4
Math.floor(4.3) // 4
Math.round(4.8334) // 5
Math.round(4.3) // 4

// MATH.MAX(), MATH.MIN() E MATH.RANDOM();
// max() retorna o maior número de uma lista de argumentos,
// min() o menor número e random() um número aleatório entre 0 e 1.

const max = Math.max(5, 3, 10, 42, 2) // 42
const min = Math.min(5, 3, 10, 42, 2) // 2

Math.random() // 0.XXX
//se quiser tirar o quebrado do random só usar floor, round or ceil
Math.floor(Math.random() * 100) // entre 0 e 100
Math.floor(Math.random() * 500) // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32
Math.floor(Math.random() * (max - min + 1)) + min

console.log('EXERCÍCIOS')
// Retorne um número aleatório
// entre 1050 e 2000
const valorMinimo = 1050
const valorMaximo = 2000
console.log(
  Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
let numerosArray = numeros.split(', ')
let maiorNumero = 0
numerosArray.forEach((numero, index) => {
  numerosArray[index] = parseInt(numero)
  if (numerosArray[index] > maiorNumero) {
    maiorNumero = numero
  }
})
console.log(maiorNumero)
// existe uma função que chama spread se eu digitar ... antes da variavel ela distrubui todos os
// items do array como argumentos de um parametrio igual abaixo no math.max
console.log(Math.max(...numerosArray))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200']
let precosLimpos = []
let somaTotal = 0

function limparPrecos(preco) {
  preco = preco.toUpperCase()
  preco = preco.replace('R$', '')
  preco = preco.trim()
  preco = preco.replace(',', '.')
  preco = parseFloat(preco)
  preco = preco.toFixed(2)
  return +preco
}

listaPrecos.forEach(preco => {
  somaTotal += limparPrecos(preco)
})
console.log(somaTotal)
// se quisesse que o total fosse um preco com cifrão
console.log(
  somaTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'code'
  })
)
