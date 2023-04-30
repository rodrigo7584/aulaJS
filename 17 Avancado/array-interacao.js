// [].FOREACH()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array.
// Ela possui três argumentos, itemAtual (valor do item da array),
// index (index do valor na array) e array (array original).
const carros = ['Ford', 'Fiat', 'Honda']
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase())
})

// com Arrow Function
const carrosForEach = carros.forEach((item, index, array) => {
  console.log(item.toUpperCase())
})

console.log(carrosForEach)
// O método sempre retorna undefined

// ARROW FUNCTION
const li = document.querySelectorAll('li')

li.forEach(i => i.classList.add('ativa')) //esssa função é igual a debaixo

li.forEach(function (item) {
  item.classList.add('ativa')
})

// MODIFICAR A ARRAY ORIGINAL
// O terceiro argumento do callback é uma referência direta e se modificado irá
// também modificar a array original.

carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item
})

console.log(carros) // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// É melhor utilizarmos o map para isso

// [].MAP()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(),
// porém ao invés de retornar undefined, retorna uma nova array com valores atualizados
//  de acordo com o return de cada iteração.

const carrosOld = ['Ford', 'Fiat', 'Honda']
const newCarros = carros.map(item => {
  return 'Carro ' + item //se não colocar o return o array sera preenchido de undefined
})

console.log(carrosOld) // ['Ford', 'Fiat', 'Honda']
console.log(newCarros) // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// VALOR RETORNADO
// Se não retornarmos nenhum valor durante a iteração utilizando map,
// o valor retornado como de qualquer função que não possui o return, será undefined.

const comidas = ['lanche', 'pizza', 'sushi']
const newComidas = comidas.map(item => {
  const novoValor = 'Carro ' + item
})

console.log(newComidas) // [undefined, undefined, undefined];

// ARROW FUNCTION E [].MAP()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

const numeros = [2, 4, 6, 8, 10, 12, 14]
const numerosX3 = numeros.map(numero => numero * 3) //aqui não tem o return pq ja retorna automaticamente quando é uma linha

console.log(numeros)
console.log(numerosX3) // [6, 12, 18, 24, 30, 36, 42];

// // [].MAP() VS [].FOREACH()
// // Se o objetivo for modificar os valores da array atual, sempre utilize o map,
// // pois assim uma nova array com os valores modificados é retornada e você pode
// // imediatamente iterar novamente sobre estes valores.

// [].MAP() COM OBJETOS
// Map pode ser muito útil para interagirmos com uma array de objetos,
// onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  }
]

// aqui corremos pelo arrya map e retornamos cada minuto no novo array tempoAulas
// e a function já esta inteira dentro do map
const tempoAulas = aulas.map(aula => aula.min)
// [15, 10, 20, 25];

// aqui fazermos a mesma coisa corremos pelo map porem passamos apenas a const que é uma função
// dentro do map, a função retorna o nome a aula. Ou seja a mesma coisa porem a função esta
// desacoplada do map
const puxarNomes = aula => aula.nome
const nomesAulas = aulas.map(puxarNomes)
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// [].REDUCE()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
// executa a função de callback para cada item da Array.
// Um valor especial existe nessa função de callback, ele é chamado de acumulador,
// mas é na verdade apenas o retorno da iteração anterior.

const aulasReduce = [10, 25, 30]
const total1 = aulasReduce.reduce((acumulador, atual) => {
  return acumulador + atual //como return é uma soma o acumulador retornará o total
})
console.log(total1) // 65

// acc accumulator cur current
const total2 = aulasReduce.reduce((acc, cur) => acc + cur, 100)
console.log(total2) // 165

// REDUCE PASSO A PASSO 1
// O primeiro parâmetro do callback é o valor do segundo argumento passado no
// reduce(callback, inicial) durante a primeira iteração.
// Nas iterações seguintes este valor passa a ser o retornado pela anterior.

// const aulasPasso1 = [10, 25, 30];

// 1
// aulasPasso1.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// 2
// aulasPasso1.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

//  3
// aulasPasso1.reduce((35, 30) => {
//   return 35 + 30;
// }, 0);  retorna 65

//  REDUCE PASSO A PASSO 2
//  Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração
//  e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

// const aulasPasso2 = [10, 25, 30];

//  1
// aulasPasso2.reduce((10, 25) => {
//   return 10 + 25;
// })  retorna 35

//  2
// aulasPasso2.reduce((35, 30) => {
//   return 35 + 30;
// }) retorna 65

// MAIOR VALOR COM [].REDUCE()

const numerosReduce = [10, 25, 60, 5, 35, 10]

const maiorValor = numerosReduce.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
})

console.log(maiorValor) // 60

// PODEMOS RETORNAR OUTROS VALORES
const aulasReduce2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  }
]

// o acumulador só é um objeto agora pq setamos ali no fim do reduce com {}
const listaAulas = aulasReduce2.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome
  return acumulador
}, {})

console.log(listaAulas)

// PASSO A PASSO REDUCE
// Passo a passo do método reduce criando um Objeto.

//  1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

//  2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

//  3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

//  4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})

// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita
// para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutasReduce = ['Banana', 'Pêra', 'Uva']

const frutasRight = frutasReduce.reduceRight((acc, fruta) => acc + ' ' + fruta)
const frutasLeft = frutasReduce.reduce((acc, fruta) => acc + ' ' + fruta)

console.log(frutasRight) // Uva Pêra Banana
console.log(frutasLeft) // Banana Pêra Uva

// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

// pode ser usado para pesquisar algo no array e retornar algo se tiver
// lembre-se do return
const frutasSome = ['Banana', 'Pêra', 'Uva']
const temUva = frutasSome.some(fruta => {
  return fruta === 'Uva'
}) // true

console.log(temUva)

function maiorQue100(numero) {
  return numero > 100
}
const numerosSome = [0, 43, 22, 88, 101, 2]
const temMaior = numerosSome.some(maiorQue100) // true

// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true.
// Se pelo menos um for falsy, ele irá retornar false.

// quase a mesma função de some, porem aqui todos tem q ser true para retornar true e não apenas um

const frutasEvery = ['Banana', 'Pêra', 'Uva', '']
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutasEvery.every(fruta => {
  return fruta // false
})

const numerosEvery = [6, 43, 22, 88, 101, 29]
const maiorQue3 = numerosEvery.every(x => x > 3) // true

// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
// Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutasFind = ['Banana', 'Pêra', 'Uva', 'Maçã']
const buscaUva = frutasFind.findIndex(fruta => {
  return fruta === 'Uva'
}) // 2

const numerosFind = [6, 43, 22, 88, 101, 29]
const buscaMaior45Find = numerosFind.find(x => x > 45) // 88

// [].FILTER()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutasFilter = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']
const arrayLimpa = frutasFilter.filter(fruta => {
  return fruta //se for true retorna o item
}) // ['Banana', 'Uva', 'Maçã']

console.log(arrayLimpa)

const numerosFilter = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = numerosFilter.filter(x => x > 45) // [88, 101]

// FILTER EM OBJETOS
const aulasFilter = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  }
]

const aulasMaiores = aulasFilter.filter(aula => {
  return aula.min > 15
})
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

// console.log('EXERCÍCIOS')

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursosEx = document.querySelectorAll('.curso')
const cursosExArray = Array.from(cursosEx) //coverto para usar os metodos de array

const objetoCursos = cursosExArray.map(curso => {
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
  // quado a chave do objeto o titulo dele no caso titulo
  // descricao tem o mesmo nome do valor que vai receber, não é necessario digitar
  // :nomeDaVariavel, pode so colocar o nome da chave que vai ser iguala variavel do valor
  return {
    titulo: titulo, //passando com :
    descricao: descricao,
    aulas, // passando sem : é a mesma coisa
    horas
  }
})
console.log(objetoCursos[0])
// Retorne uma lista com os
// números maiores que 100
const numerosEx = [3, 44, 333, 23, 122, 322, 33]

const verificarMaiorQue100 = numero => numero > 100
const maioresQue100 = numerosEx.filter(verificarMaiorQue100)

console.log(maioresQue100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const contemBaixo = instrumentos.some(item => item === 'Baixo')

console.log(contemBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acc, compra) => {
  return (acc += +compra.preco.replace('R$ ', '').replace(',', '.'))
}, 0)

console.log(totalCompras)
