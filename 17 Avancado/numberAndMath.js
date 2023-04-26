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
