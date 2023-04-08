// o metodo classlist possui 4 metodos e ela é um array like
// add contains remove toggle
const menu = document.querySelector('.menu')
menu.classList.toggle('ativo')

if (menu.classList.contains('ativo')) {
  console.log('menu está ativo')
} else {
  console.log('menu não está ativo')
}

// os attibutes podem ser acessados pelo metodo abaixo e tmb é arraylike
console.log(menu.attributes)
//pode acessar um attibute como objeto
console.log(menu.attributes.class)
//como classList attributes tem outros metodos
//img.getAttribute('src'); // valor do src
//img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
//img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// EXERCICIOS
console.log('EXERCICIOS')
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu ul li a')
itensMenu.forEach(item => {
  item.classList.add('ativo')
})
console.log(itensMenu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for (i = itensMenu.length - 1; i >= 1; i--) {
  itensMenu[i].classList.remove('ativo')
}
console.log(itensMenu)
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((item, index) => {
  if (item.getAttribute('alt')) {
    console.log(`A imagem na posição ${index} possui alt`)
  } else {
    console.log(`A imagem na posição ${index} não possui alt`)
  }
})

// Modifique o href do link externo no menu
itensMenu[0].setAttribute('href', '#')
