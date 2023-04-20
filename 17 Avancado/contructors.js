const carro = {
  marca: 'Marca',
  preco: 0
}

// constructor é uma forma de criar um objeto com um padrao
// para apenas preencher os campos necessarios atraves de uma função construtora
// Na função construtora geralmente começa com a primeira letra maiuscula
// a constutora recebe parametro como toda função
function Carro(parametroMarca, parametroPreco) {
  this.marca = parametroMarca //this é usado pra se referir ao proprio objeto
  this.preco = parametroPreco
}

// Quando chamamos essa função é necessario usar a palavra new
// assim ele executa a função como construtora
const honda = new Carro('honda', 2000)
console.log(honda)
