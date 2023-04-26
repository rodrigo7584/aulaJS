// a unica diferença de criar uma string direto e criar uma string
// usando o construtor é que direto retorna uma string e com o construtor
// retorna um objeto, mas os metodos e propridades são os mesmos

const comida = 'lanche'
const bebida = 'refrigerante'
// conseguimos acessar os campos da string com [] afinal é um array like
console.log(comida[0])
console.log(bebida[0])

// STR.CHARAT(N)
// Retorna o caracter de acordo com o index de (n).

comida.charAt(0) // l
comida.charAt(2) // n
comida.charAt(comida.length - 1) // e

// STR.CONCAT(STR2, STR3, ...)
// Concatena as strings e retorna o resultado.
const refeicao = comida.concat(' e ', bebida)
console.log(refeicao)

// STR.INCLUDES(SEARCH, POSITION)
// Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

listaFrutas.includes(fruta) // true
fruta.includes(listaFrutas) // false

// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
// Procura pela string exata dentro de outra string. A procura é case sensitive.

fruta.endsWith('nana') // true pq Banana termina com nana
fruta.startsWith('Ba') // true pq Banana termina com Ba
fruta.startsWith('na') // false pq não começa com na

// STR.SLICE(START, END)
// Corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente'
const transacao2 = 'Depósito de fornecedor'
const transacao3 = 'Taxa de camisas'

transacao1.slice(0, 3) // Dep
transacao2.slice(0, 5) // Depós
transacao3.slice(0, 3) // Tax

transacao1.slice(12) // cliente senão possui o parametro end ele só usa o start
transacao1.slice(-4) // ente
transacao1.slice(3, 6) // ósi

// STR.SUBSTRING(START, END)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

comida.substring(3, 5) // che
comida.substring(0, 4) // lanch
comida.substring(4) // lanch
comida.substring(-3) // lanche pq não funciona com negativo

// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra'

instrumento.indexOf('r') // 5 o primeiro r esta na posicao 5
instrumento.lastIndexOf('r') // 6 o ultimo r esta na posicao 6
instrumento.indexOf('ta') // 3 ta começa na posição 3

// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPrecos.forEach(preco => {
  console.log(preco.padStart(10, '.'))
})

listaPrecos[0].padStart(10, '.') // .....R$ 99
listaPrecos[0].padEnd(10, '.') // R$ 99.....

// STR.REPEAT(N)
// Repete a string (n) vezes.

const metralhadora = 'Tra'

metralhadora.repeat(5) // TraTraTraTraTraTra

// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')

let preco = 'R$ 1.200,43'
preco = preco.replace(',', '.') // 'R$ 1200.43'

// Veremos mais sobre Regular Expression

// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.

const arrayItens = listaItens.split(' ')

const htmlText = 'item 1, item 2, item 3, item 4'
const htmlArray = htmlText.split(', ') //aqui remove tudo que for ', ' e quebra em um elemento do array
const htmlNovo = htmlArray.join(' - ')

// join é um método de Array

// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

sexo1.toLowerCase() === 'feminino' // true
sexo2.toLowerCase() === 'feminino' // true
sexo3.toLowerCase() === 'feminino' // true

// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   '
valor.trim() // 'R$ 23.00' removeu o espaço do inicio e fim
valor.trimStart() // 'R$ 23.00   ' removeu o espaço do fim
valor.trimEnd() // '  R$ 23.00'removeu o espaço do inicio

console.log('EXERCÍCIOS')
// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
]
let transacoesSomadas = []
transacoes.forEach((transacao, index) => {
  transacoesSomadas[index] = transacao.descricao.concat(' ', transacao.valor)
  console.log(transacoesSomadas[index])
})
let somaTaxa = 0
let somaRecebimento = 0
transacoes.forEach(transacao => {
  const valorLimpo = parseInt(transacao.valor.replace('R$ ', ''))
  if (transacao.descricao.toLocaleUpperCase().includes('TAXA')) {
    somaTaxa += valorLimpo
  } else if (transacao.descricao.toLocaleUpperCase().includes('RECEBIMENTO')) {
    somaRecebimento += valorLimpo
  }
})
console.log(
  `valor total Recebimento:${somaRecebimento} valor total taxa:${somaTaxa}`
)
// // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)
// // Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

const htmlAs = html.replace(/[span]+/g, 'a')
console.log(htmlAs)

// // Retorne o último caracter da frase
const frase = 'Melhor do ano!'
console.log(frase.charAt(frase.length - 1))
console.log(frase[frase.length - 1])
console.log(frase.slice(-1))
// // Retorne o total de taxas
const transactions = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]
let qtdTaxas = 0
transactions.forEach(transaction => {
  if (transaction.toLocaleUpperCase().includes('TAXA')) {
    qtdTaxas++
  }
})
console.log(qtdTaxas)
// poderia tirar os espaços e fazer a comparação com o começo da string
let qtdTaxas2 = 0
transactions.forEach(transaction => {
  transaction = transaction.toLocaleLowerCase() //fica tudo minuscuslo
  transaction = transaction.trim() //tira os espaços do começo e fim
  transaction = transaction.slice(0, 4) // recorta os 4 primeiros digitos
  if (transaction === 'taxa') {
    qtdTaxas2++
  }
})
console.log(qtdTaxas2)
