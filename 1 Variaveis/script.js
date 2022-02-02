// Formas de criar variaveis com var
var nome = 'Rodrigo'
var idade = 27

// Multiplicando variaveis
var preco = 10
var quantidade = 5
var valorTotal = preco * quantidade

// Criar varias variaveis é só separar por virgula
var empresa = 'cojiba',
  tipoEmpresa = 'mercado',
  temFuncionarios = true

// Se criar sem valor a variavel recebe undefined
var comidaFavorita

// Atribuir valor a variavel
comidaFavorita = 'lasanha'

// Para exibir uma variavel no console
console.log(nome, idade, comidaFavorita)

// Existem 7 tipos de dados, o tipo que a variavel será é imutavel
var nome = 'Rodrigo' // String variavel de texto
var idade = 28 // Number apenas numeros
var trabalha = true // Boolean variavel que só pode ser true ou false
var time // Undefined não tem um tipo definido pq não recebeu valor nenhum ainda
var comida = null // Null uma variavel null é do tipo objeto

var simbolo = Symbol() // Symbol
var objeto = {} // Object é um objeto que pode receber diversos valores

// Para saber qual o tipo podemos usar typeof
console.log(
  'nome =',
  typeof nome,
  'idade =',
  typeof idade,
  'trabalha =',
  typeof trabalha,
  'time =',
  typeof time,
  'comida =',
  typeof comida,
  'simbolo =',
  typeof simbolo,
  'objeto =',
  typeof objeto
)

// Template string ao inves de somar strings é possivel adicionar conteudo
//Exemplo sem template string
console.log('O ' + empresa + ' é um ' + tipoEmpresa)
//Exemplo usando template string usa crase
console.log(`O ${empresa} é um ${tipoEmpresa}`)

/*DIFERENÇAS ENTRE VAR LET CONST 
A principal diferença LET e VAR é que uma variavel VAR não respeita o escopo de bloco de uma função 
ou seja se criar uma variavel VAR dentro de uma função ela é acessavel fora da mesma 
já o LET não, só de usar {} ja crio um bloco */
//exemplo

{
  let exemploEscopo = 'estou no bloco'
  console.log('Variavel dentro do bloco', exemploEscopo)
}
// Dara erro pq não existe fora do escopo
// console.log('Variavel fora do bloco', exemploEscopo)

//Const tmb respeita o escopo de bloco, porem impede redeclaração, ou seja só posso declarar
//uma vez e impede a mudança no valor da variavel o valor sera fixo constante
//para ser declarado tem que colocar um valor

const semana = 'Sexta'
//dara erro não pode mudado valor
// semana = "Segunda"
//dara erro não pode declarar duas vezes
// const semana = "Segunda"

//EXERCICIOS
// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto'
//   const marca = 'Fiat'
//   let portas = 4
// }
// console.log(var, marca, portas)
{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas = 4
  console.log(cor, marca, portas)
}
//VAR não é uma cariavel para estar sendo retornada e jogar o console log no escopo

// Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2
//   return x + dois
// }
// function dividirDois(x) {
//   return x + dois
// }
// somarDois(4)
// dividirDois(6)
const dois = 2
function somarDois(x) {
  return x + dois
}
function dividirDois(x) {
  return x / dois
}
somarDois(4)
dividirDois(6)

//tirar o const do cbloco da funçao e trocar o sinal

// O que fazer para total retornar 500?
// var numero = 50

// for (var numero = 0; numero < 10; numero++) {
//   console.log(numero)
// }

// const total = 10 * numero
// console.log(total)

const numero = 50

for (let numero = 0; numero < 10; numero++) {
  console.log(numero)
}

const total = 10 * numero
console.log(total)

//trocar o var do for para let pois vai mudar e respeitar o bloco e primeiro var para const pois nao muda
//o valor
