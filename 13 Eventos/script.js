// Eventos como o proprio nome diz é um evento que ocorre executa uma funçao
// o mais comum é o click como exemplo abaixo
const img = document.querySelector('img')
// pode usar arrow function ou função normal
img.addEventListener('click', function () {
  console.log('clicou na imagem')
})
// uma boa pratica é criar a função fora do evento
function teste() {
  console.log('esse clique é da função de fora')
}

img.addEventListener('click', teste)

// o primeiro parametro da função passada no addEventListener
// é referente ao evento q ocorrreu, geralmente usam o e para
// se referir a esse parametro
// algumas propriedades do parametro são os abaixo
// e.currentTarget; // este se refere ao item que foi adicionado o listener (this)
// e.target; onde o clique ocorreu
// e.type; tipo de evento
// e.path; e o caminho de onde foi adicionado o evento
function evento(e) {
  const currentTarget = e.currentTarget
  const target = e.target
  const type = e.type
  const path = e.path
  console.log(currentTarget, target, type, path)
}

img.addEventListener('click', evento)

// o metodo preventDefault impede que a funçao padrao html ocorra
// exemplo quando clica em um link vc acessa a pagina do link
// se adicionar o preventDefault isso não ocorrera

const linkExterno = document.querySelector('a[href^="http"]')

function clicouNoLink(e) {
  e.preventDefault()
  console.log('clicou no link')
}

linkExterno.addEventListener('click', clicouNoLink)

// existem varios eventos na documentação tem todos, w3 e mdn são boas referencia

// podemos colocar um addEventListener em varios itens atraves de loops
// como for each do exemplo abaixo

function handleImagem(event) {
  console.log(event.target)
}

const imgs = document.querySelectorAll('img')

imgs.forEach(imagem => {
  imagem.addEventListener('click', handleImagem)
})

console.log('EXERCICIOS')

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a:not([href^="http"])')

function funcaoLinksInternos(event) {
  event.preventDefault()
  linksInternos.forEach(link => {
    if (link.classList.contains('ativo')) {
      link.classList.remove('ativo')
    }
  })
  this.classList.add('ativo')
}

linksInternos.forEach(link => {
  link.addEventListener('click', funcaoLinksInternos)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const corpo = document.body

// function handleFilhoCorpo(e) {
//   console.log(e.target)
// }

// function handleCorpo(event) {
//   this.childNodes.forEach(item => {
//     item.addEventListener('click', handleFilhoCorpo)
//   })
// }

// corpo.addEventListener('click', handleCorpo)

//Versão do professor como o * no css se refere a todos elementos é só usar
// ele no query selector

const allSiteItems = document.querySelectorAll('body *')

function handleElemento(event) {
  console.log(this)
}

allSiteItems.forEach(elemento => {
  elemento.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const corpo = document.body

// function handleFilhoCorpo(e) {
//   e.target.remove()
// }

// function handleCorpo(event) {
//   this.childNodes.forEach(item => {
//     item.addEventListener('click', handleFilhoCorpo)
//   })
// }

// corpo.addEventListener('click', handleCorpo)

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const allPAndH2 = document.querySelectorAll('p,h2')
function handleKey(e) {
  if (e.key === 't') {
    allPAndH2.forEach(item => {
      item.classList.toggle('texto-grande')
    })
  }
}
window.addEventListener('keydown', handleKey)
