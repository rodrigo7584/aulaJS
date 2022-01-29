//Tipo boolean só pode ser true ou false
var estaEmpregado = true

//exemplo de condicional com if else
//só colocando a variavel boolean ele entende que é pra verificar se é verdadeiro
if (estaEmpregado) {
  console.log('Está empregago')
} else {
  console.log('Ajuda o maluco q ta doente')
}
//Pode se usar else if
var opcaoSelecionada = 1

if (opcaoSelecionada == 1) {
  console.log('Opção selecionada 1')
} else if (opcaoSelecionada == 2) {
  console.log('Opção selecionada 2')
} else {
  console.log('Nenhuma opção selecionada')
}

/* Formas de retornar falso no if
if(false)
if(0) 
if(-0)
if(NaN)
if(null)
if(undefined)
if('') string vazia
*/

var testandoFalso = 0

if (testandoFalso) {
  console.log('O valor não é falso')
} else {
  console.log('o valor é falso')
}

// O operador logico de ! nega uma operação ele inverte ao inves de verificar true verifica se é false

if (!testandoFalso) {
  console.log('O valor é falso')
} else {
  console.log('o valor não é falso')
}

/*
Operadores de comparação
<    menor que                  ex: 7 < 5 vai ser false
>    maior que                  ex: 7 > 7 vai ser false
<=   menor ou igual a           ex: 7 <= 7 vai ser true
>=   maior ou igual a           ex: 7 >= 5 vai ser true
==   valor igual a              ex: 7 == '7' vai ser true
===  valor e tipo igual a       ex: 7 === '7' vai ser false 
!=   valor diferente de         ex: 7 !== '7' vai ser false
!==  valor e tipo diferente de  ex: 7 !=== '7' vai ser true
indo no proprio console e digitando 
10 >= 10 
retornara true ou false
*/

//Operdador logico && é igual ao e
var estaEstudando = true
//ele verificara se as variaveis são true
if (estaEmpregado && estaEstudando) {
  console.log('Ele estuda e trabalha')
} else {
  console.log('Ele não estuda e trabalha')
}
//exatamente assim
if (estaEmpregado === true && estaEstudando === true) {
  console.log('Ele estuda e trabalha')
} else {
  console.log('Ele não estuda e trabalha')
}
//Operdador logico || é igual ao ou
var estaEstudando = false
//ele verificara se as variaveis são true
if (estaEmpregado || estaEstudando) {
  console.log('Ele estuda ou trabalha')
} else {
  console.log('Ele não estuda e trabalha')
}

//Operador switch case ele retorna o valor que se busca
var corSelecionada = 'azul'

//dependendo valor da variavel no parenteses ele executa o codigo
switch (corSelecionada) {
  //caso seja rosa o valor executa o codigo
  case 'rosa':
    console.log('A cor selecionada foi rosa')
    //o break faz o codigo parar de ser verificado se a condicao for verdadeira
    break
  case 'azul':
    console.log('A cor selecionada foi azul')
    break
  //O default entra caso o valor não atenda nenhum case
  default:
    console.log('Não foi selecionada nenhuma cor')
}

//exercicio

//1
var minhaIdade = 27,
  idadeNamorada = 28
if (minhaIdade > idadeNamorada) {
  console.log('Minha idade é maior que da minha namorada')
} else if (minhaIdade === idadeNamorada) {
  console.log('Minha idade é igual da minha namorada')
} else if (minhaIdade < idadeNamorada) {
  console.log('Minha idade é menor que da minha namorada')
}

//2

var expressao = 5 - 2 && 5 - ' ' && 5 - 2
//resultado é 3 ele retorna o ultimo true
//no caso 5-2

//variaveis truthy or falsy
//para verificar se uma variavel é true ou false só digitar !! na sua frente
var nome = 'andre', //true
  numero = 28, //true
  doutor = false, //false
  empregoFuturo, //false
  dinheiroNaConta = 0 //false
console.log(!!nome, !!numero, !!doutor, !!empregoFuturo, !!dinheiroNaConta)
// o que vai dar ?
if ('gato' === 'Gato' && 5 > 2) {
  console.log('true')
} else {
  console.log('false')
}
//true
