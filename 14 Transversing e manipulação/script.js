// // OUTERHTML, INNERHTML E INNERTEXT
// // Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

// const menu = document.querySelector('.menu')

// menu.outerHTML // todo o html do elemento
// menu.innerHTML // html interno
// menu.innerText // texto, sem tags

// menu.innerText = '<p>Texto</p>' // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>' // a tag é renderizada

// // TRASVERSING
// // Como navegar pelo DOM, utilizando suas propriedades e métodos.

// const lista = document.querySelector('.animais-lista')

// lista.parentElement // pai
// lista.parentElement.parentElement // pai do pai
// lista.previousElementSibling // elemento acima
// lista.nextElementSibling // elemento abaixo

// lista.children // HTMLCollection com os filhos
// lista.children[0] // primeiro filho
// lista.children[--lista.children.length] // último filho -- é como se fosse -1 no fim

// lista.querySelectorAll('li') // todas as LI's de dentro da lista.
// lista.querySelector('li:last-child') // último filho da lista

// // ELEMENT VS NODE
// // Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// lista.previousElementSibling // elemento acima
// lista.previousSibling // node acima

// lista.firstChild // primeiro node child
// lista.childNodes // todos os node child

// // Geralmente estamos atrás de um elemento e não de qualquer node em si.

// // MANIPULANDO ELEMENTOS
// // É possível mover elementos no dom com métodos de Node.

// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// contato.appendChild(lista) // move lista para o final de contato
// contato.insertBefore(lista, titulo) // insere a lista antes de titulo
// contato.removeChild(titulo) // remove titulo de contato
// contato.replaceChild(lista, titulo) // substitui titulo por lista
// // NOVOS ELEMENTOS
// // Podemos criar novos elementos com o método createElement()

// const animais = document.querySelector('.animais')

// const novoH1 = document.createElement('h1') //Aqui criamos o elemento
// novoH1.innerText = 'Novo Título' //Aqui adicionamos um texto dentro da tag
// novoH1.classList.add('titulo') //Aqui colocamos uma classe a esse titulo

// animais.appendChild(novoH1) //Aqui colocamos ele no HTMl

// // CLONAR ELEMENTOS
// // Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

// const titulo2 = document.querySelector('h1')
// const novoTitulo = titulo
// // titulo, titulo2 e novoTitulo são iguais pq se referem ao mesmo html
// // então mesmo que estejam em variaveis diferente se referem ao mesmo elemento
// // Podemos clonar o elemento para ter ele realmente em uma variavel
// const cloneTitulo = titulo.cloneNode(true) //aqui ele clona o elemento
// // true sinaliza para incluir os filhos
// contato.appendChild(cloneTitulo) //aqui adiciona a tela

console.log('EXERCICIOS')

// EXERCÍCIO

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('nav.menu')
const copyright = document.querySelector('.copy')
const menu2 = menu.cloneNode(true)
copyright.appendChild(menu2)
console.log(menu2)
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq dl')
console.log(faq.firstElementChild)
// Selecione o DD referente ao primeiro DT
console.log(faq.firstElementChild.nextElementSibling)
// Substitua o conteúdo html de .faq pelo de .animais
let conteudoFaq = document.querySelector('.faq')
let conteudoAnimais = document.querySelector('.animais')
conteudoFaq.innerHTML = conteudoAnimais.innerHTML

console.log(cloneAnimais)
