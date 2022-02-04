//Todo o conteudo da minha pagina esta no objeto window, esse objeto tem varias classes e metodos 
//ex alert 
// window.alert('sou um alert')
//como window é um objeto global não é necessario utilizado sempre 
// alert('sou um alert sem window')

//Conseguimos selecionar um conteudo do html pelo window uma das forma é usando o metodo queryselecto
window.document.querySelector('h1')
//podemos salvar isso em uma variavel sem usar window
const h1Site = document.querySelector('h1')
console.log(h1Site)
//O query selector funciona do mesmo metodo que procurar um elemento por css 
const h1Classe = document.querySelector('.titulo-topo')
console.log(h1Classe)

//vamos adicionar o metodo que adiciona um evento se determinado interação ocorre
//os metodos de event listener são uma interação e um callback 
//callback é uma funcao sem nome q executa na hora 

// h1Classe.addEventListener('click', function(){
//   console.log('cliquei')
// })

//Podemos executar com uma função q não seja callback no eventListener vou chamar minha função cliquei

function Cliquei(){
  console.log('cliquei')
}
h1Classe.addEventListener('click', Cliquei)