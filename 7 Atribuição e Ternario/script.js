//existe uma forma de atribuir valor de forma mais rapido ou simpliicada
//exemplos a baixo

var x = 5
var y = 10
x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)

//O operador ternario é uma abrevição de If else
//para criar precisa da codição ? true : false

var pessoa = 'Alexia'
//condição      //O ? representa if se            //O : representa else senão
var namorada =
  pessoa === 'Alexia'
    ? `${pessoa} é sua namorada`
    : `${pessoa} não é sua namorada`
console.log(namorada)

//EXERCICIOS
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000
scroll += 500
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true
var possuiCasa = true
var darCredito = possuiCarro && possuiCasa ? true : false
