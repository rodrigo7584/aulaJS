//formas de selcionar elementos no DOM
//Antigo mas bem usado
//ele busca o elemento pelo ID html
const animais = document.getElementById('animais')
//Se o elemento não existir retornara null

//podemos selecionar por classe e tagname tmb
const gridSection = document.getElementsByClassName('grid-section')
//por classe sempre retorna um html collection 'array com os elementos'
//podemos passar classes compostas

//Existe um seletor geral o querySelector ele busca por css
//se for classe . id # se for uma tag ul
//ele seleciona o primeiro elemento que encontrar compativel
const primeiraLi = document.querySelector('li')
//o sinal ^significa  vai pegar o que comeca com
const linkInterno = document.querySelector('[href^="#"]')

//O querySelectorAll busca todos os elementos da pagina compativeis
const animaisImg = document.querySelectorAll('.animais img')
//isso não retorna html colections e sim um NODE list que tmb é um tipo de array

//diferença entre html collection e node list
//primeira são os metodos e propriedades
//html collection é ao vivo se apos a execução do codigo algo mudar como um
//elemento ser criado e corresponder a busca isso retorna no html collection
//ja no node list não

//Exemplo for each
//gridSection.forEach(function(gridItem, index, array) {

// Retorne no console todas as imagens do site
console.log('EXERCICIO 1')
const todasImgs = document.querySelectorAll('img')
todasImgs.forEach(function (item) {
  console.log(item)
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
console.log('EXERCICIO 2')
const apenasImagem = document.querySelectorAll('img[src^="./img/imagem"]')
apenasImagem.forEach(function (item) {
  console.log(item)
})

// Selecione todos os links internos (onde o href começa com #)
console.log('EXERCICIO 3')
const apenasHref = document.querySelectorAll('[href^="#"]')
apenasHref.forEach(function (item) {
  console.log(item)
})
// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')

// Selecione o último p do site

const todosP = document.querySelectorAll('p')
const ultimoP = todosP[todosP.length - 1]
