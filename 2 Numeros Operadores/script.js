var soma = 1 + 2
var subtrai = 1 - 2
var multiplica = 2 * 2
var divide = 10 / 2
var expoente = 3 ** 3
var modulo = 10 % 3 //resto da divisao
var resultados = `soma =${soma}
 subtração=${subtrai} 
 multiplicação=${multiplica} 
 divisão=${divide}
 expoente=${expoente}
 modulo=${modulo}`
console.log(resultados)

//Nan significa Not A Number (não é um numero)

//modos de incrementar ou decrementar

var incrementar = 1
incrementar = incrementar++
console.log(incrementar)
//mesmo funciona para decrementar com -
incrementar = ++incrementar
console.log(incrementar)
//conseguimos convertar uma string para numero se ela for compativel usando o + e - no inicio
var stringNumero = '5'
console.log('valor = ' + stringNumero, 'tipo = ' + typeof stringNumero)
stringNumero = +stringNumero
console.log('valor = ' + stringNumero, 'tipo = ' + typeof stringNumero)
//como - tranforma igualmente porem negativo
stringNumero = -stringNumero
console.log('valor = ' + stringNumero, 'tipo = ' + typeof stringNumero)

//exercicio
var n1 = '50'
var n2 = 200
console.log(+n1 + n2)

console.log(++n2)

var numero = '80'
var unidade = 'kg'
var peso = +numero / 2 + unidade
var pesoPorDois = peso
console.log(pesoPorDois)
