// é possivel saber os tamanhos dos elementos usando
// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll
// isso pode ser usado tanto com Width and innerHeight
const listaAnimais = document.querySelector('.animais-lista')
console.log('tamanho total:' + listaAnimais.scrollHeight)

// tem como saber a distancia do elemento do topo da pagina
// e distancias laterais
console.log('distancia top:' + listaAnimais.offsetTop)
console.log('distancia esquerda:' + listaAnimais.offsetLeft)

// existe um metodo que traz diversas informações de distancias
// de um elemento esse metodo é o getBoundingClientRect()
const rect = listaAnimais.getBoundingClientRect()
// isso retorna um objeto para acessar e manupilar é só .metodo
console.log(rect.x)

// as propriedades do window da para saber o tamanho da tela do usuario

window.innerWidth // width do janela
window.outerWidth // soma dev tools também
window.innerHeight // height do janela
window.outerHeight // soma a barra de endereço

window.pageYOffset // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px')
}

// existe um metodo chamado matchmedia para saber o tamanho da tela do user
const small = window.matchMedia('(max-width: 600px)')

if (small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

console.log('EXERCICIOS')
// Verifique a distância da primeira imagem
// em relação ao topo da página
const Imagens = document.querySelectorAll('img')
console.log(Imagens[0].offsetTop)
// Retorne a soma da largura de todas as imagens
function somarLarguraImagens() {
  let somaLarguraImagens = 0
  Imagens.forEach(item => {
    somaLarguraImagens += item.scrollWidth
  })
  console.log(somaLarguraImagens)
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// const todosLinks = document.querySelectorAll('a')
// todosLinks.forEach(item => {
//   if (item.scrollHeight < 48 || item.scrollWidth < 48) {
//     console.log('existem links menores que 48/48px')
//     console.log(item.scrollHeight, item.scrollWidth)
//   } else {
//     console.log('não existem links menores que 48/48px')
//   }
// })

// para realmente funcionar o script teria de estar na função window.onload
// pq as imagens demoram para serem carregadas e o js não, então ele não vai
// saber os tamanhos das imagens para efetuar a soma sem fazer isso

function verificarTamanhoLinks() {
  const todosLinks = document.querySelectorAll('a')
  todosLinks.forEach(item => {
    if (item.scrollHeight < 48 || item.scrollWidth < 48) {
      console.log('existem links menores que 48/48px')
      console.log(item.scrollHeight, item.scrollWidth)
    } else {
      console.log('não existem links menores que 48/48px')
    }
  })
}
window.onload = function () {
  verificarTamanhoLinks()
  somarLarguraImagens()
}
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const telaMobile = window.matchMedia('(max-width:720px)')
const menu = document.querySelector('.menu')
if (telaMobile.matches) {
  menu.classList.add('ativo')
} else {
  menu.classList.remove('ativo')
}
console.log(menu.className)
