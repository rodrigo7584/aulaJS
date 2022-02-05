//formas de selcionar elementos no DOM
//Antigo mas bem usado
//ele busca o elemento pelo ID html
const animais = document.getElementById('animais')
//Se o elemento não existir retornara null

//podemos selecionar por classe e tagname tmb
const gridSection = document.getElementsByClassName('grid-section')
//por classe sempre retorna um array com os elementos
//podemos passar classes compostas

//Existe um seletor geral o querySelector ele busca por css
//se for classe . id # se for uma tag ul
//ele seleciona o primeiro elemento que encontrar compativel
const primeiraLi = document.querySelector('li')
const linkInterno = document.querySelector('[href^="#"]')

//O querySelectorAll busca todos os elementos da pagina compativeis
const animaisImg = document.querySelectorAll('.animais img')
//isso não retorna um arrays e sim um NODE list
