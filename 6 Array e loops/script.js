//Array é um grupo de valores relacionados
//Para criar um array
var mercados = ['Nova', 'Savenagno', 'Cojiba', 'Elzio', 'Deberaldini']
//para acessar um valor vc digita o nome e o campo
console.log('Esse é o valor da posição 2', mercados[2])

//metodos e propriedades de arrays
//exemplos
//pop remove o ultimo item do array
var ultimoItem = mercados.pop()
//lembrete é um metodo então abre e fecha parenterese ()

//push adiciona algo no final do array
mercados.push('Martins')

//lenght para saber o tamanho do array
mercados.length
//lembrete é uma propriedade então sem parenteses

//for loop
//um loop é executar um numero x de vezes um trecho de codigo
//exemplo de como fazer
var varFor
//para fazer o for precisa de 3 valorer
//primeiro numero inicial qual valor vai inciar o for no exemplo sera zero
//segundo a condição como no exemplo enquanto a variavel for menor q 10
//terceiro e ultimo incremento o que vai acontecer se a condição for verdadeira
for (varFor = 0; varFor < 10; varFor++) {
  console.log('varFor =', varFor)
}

//while loop
//para fazer um while deve ter os mesmo requisitos do for mas a forma de declarar muda
//valor inicial tem de ser setado fora do loop
var varWhile = 0
//aqui temos a condição
while (varWhile < 10) {
  console.log('varWhile =', varWhile)
  //aqui o incremento vem dentro do loop
  varWhile++
}

//Loops são interessantes para interagir com arrays
//assim podemos correr todo o array de forma automatica
//mercados.length vai puxar o tamanho do meu array

for (let i = 0; i < mercados.length; i++) {
  //como cada vez q ler o codigo o i valera um numero e somara mais um isso
  //vai fazer com que leia todos os itens do array
  console.log(mercados[i])
}
//break pode ser usado para parar o loop ex vamos para quando o mercado for cojiba
for (let i = 0; i < mercados.length; i++) {
  if (mercados[i] === 'Cojiba') {
    break
  } else {
    console.log(mercados[i])
  }
}
//ForEach é um metodo para correr o array tmb
//vc passa o array e uma funçao para ocorrer a cada item
//os argumentos passados na função são o valor do array, a posicao e array toda
mercados.forEach(function (item, posicao, toda) {
  console.log('valor ', item, 'posicao ', posicao, 'nome array', toda)
})

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasVencida = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < copasVencida.length; i++) {
  console.log(`O Brasil ganho a copa de ${copasVencida[i]}`)
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'Pera') {
    break
  } else {
    console.log(frutas[i])
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
