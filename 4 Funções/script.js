//para declarar uma função
//comando function o nome apos o parametro ou argumento se tiver e {}

function funcaoExemplo() {
  console.log('função declarada')
}

//so digitar com os parenteses ela ja ativo a função
funcaoExemplo()

//agora vamos passar uma parametro na funcão

function areaQuadrado(lado) {
  var area = lado * lado
  return console.log(area)
}
//aqui dentro do parenteses vamos passar o valor q sera o lado
areaQuadrado(5)

//PARAMETRO E ARGUMENTO
//Argumento é o valor passado
//parametro é o valor recebido

//peso e altura são parametros
function imc(peso, altura) {
  imc = peso / (altura * altura)
  return console.log('Seu IMC = ', imc)
}

//94 e 1.82 são argumentos
imc(94, 1.82)

//função com if
//aqui temos o parametro cor mas não necessariamente ele precisa receber um argumento
//se não receber nada saira no else
function ranger(cor) {
  if (cor == 'Azul') {
    console.log('Você é o Ranger Azul')
  } else if (cor == 'Preto') {
    console.log('Você é o Ranger Preto')
  } else if (cor == 'Rosa') {
    console.log('Você é o Ranger Rosa')
  } else if (cor == 'Dourado') {
    console.log('Você é o Ranger Dourado')
  } else {
    console.log('Você não é um Ranger')
  }
}
ranger('Azul')
//É importante usar o return pois sem ele a função vai retornar um undefined pq não
//terá um return e o return sempre existe esse console mostra isso
//apos um return a função deixa de executar

console.log(ranger('Azul'))

//a mesma funçao com Return
function ranger2(cor) {
  if (cor == 'Azul') {
    return 'Você é o Ranger Azul'
  } else if (cor == 'Preto') {
    return 'Você é o Ranger Preto'
  } else if (cor == 'Rosa') {
    return 'Você é o Ranger Rosa'
  } else if (cor == 'Dourado') {
    return 'Você é o Ranger Dourado'
  } else {
    return 'Você não é um Ranger'
  }
}
ranger2('Azul')
console.log(ranger2('Azul'))
//sem enviar um argumento
addEventListener('click', function () {
  console.log('oi')
})

//Escopo, variaveis criadas dentro de funções só existem nelas
//essa variavel criada fora consigo usar dentro da função
var paisesNoMundo = 193
function paisesParaVisitar(paisesQueVisitei) {
  //a variavel paises no mundo não existe fora da função
  var totalParaVisitar = paisesNoMundo - paisesQueVisitei
  //Lembrete usando crase podemos usar o js no meio da string ou html
  return `Faltam ${totalParaVisitar}`
}

console.log(paisesParaVisitar(90))

//essa variavel não consigo mostrar pois só existe na função
// console.log(totalParaVisitar)
//ja essa é possivel
console.log(paisesNoMundo)

//EXERCICIO
// Crie uma função para verificar se um valor é Truthy
function ex1(valor) {
  if (!!valor) {
    return 'É true'
  } else {
    return 'É false'
  }
}
console.log('ex1', ex1(5))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function ex2(lado) {
  return lado * 4
}
console.log('ex2', ex2(5))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function ex3(nome, sobrenome) {
  return nome + ' ' + sobrenome
}
console.log('ex3', ex3('rodrigo', 'gandhi'))
// Crie uma função que verifica se um número é par
function ex4(numero) {
  if (numero % 2 != 0) {
    return numero + ' não é par'
  } else {
    return numero + ' é par'
  }
}
console.log('ex4', ex4(0))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function ex5(valor) {
  return typeof valor
}
console.log('ex5', ex5(3))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log('Rodrigo Gandhi')
})

// Corrija o erro abaixo

var totalPaises = 193
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(20), jaVisitei(20))
