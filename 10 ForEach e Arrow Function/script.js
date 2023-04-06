// Selecionando todas imgs do site
const imgs = document.querySelectorAll('img')
// retorna uma nodelist
console.log(imgs)

// aqui fazemos o foreach, ele é composto pela lista.forEach(função de callback)
//a função de callback tem 3 paramtros o primeiro é o item da vez
//o segundo parametro é o index, que é o numero da posição no array
//e o 3 item é o array completo.
imgs.forEach(function (item, index, lista) {
  console.log(item, index, lista)
})
//forEach é um metodo de array like se sua lista não for um array like como o exemplo abaixo
const titulos = document.getElementsByClassName('titulo')
// voce pode usar a função abaixo
const titulosArray = Array.from(titulos)
// agora o foreach pode ser usado
titulosArray.forEach(function (item) {
  console.log(item)
})

// ARROW Function
// uma arrow function é apenas uma nova sintaxe de se declarar uma função
// na arrow function não precisa digitar function e coloca uma flecha na frente dos
// parenteses do argumento, se tiver um argumento só nem precisa dos parenteses
// exemplo abaixo
imgs.forEach(item => {
  console.log(item)
})

// EXERCICIOS

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach(item => console.log(item))
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item, index) =>
  console.log('paragrafo ' + index + ': ' + item.innerText)
)

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

const imgs2 = document.querySelectorAll('img')

// tem de colocar entre parenteses pq é mas de um parametro
imgs2.forEach((item, index) => {
  console.log(item, index)
})

let i = 0
// como não tem parametro nenhum precisa colocar o () vazio
imgs2.forEach(() => {
  console.log(i++)
})

imgs2.forEach(() => i++)
