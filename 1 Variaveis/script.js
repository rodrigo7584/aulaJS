// Formas de criar variaveis com var
var nome = 'Rodrigo';
var idade = 27;

// Multiplicando variaveis
var preco = 10;
var quantidade = 5;
var valorTotal = preco * quantidade;

// Criar varias variaveis é só separar por virgula
var empresa = 'cojiba',
  tipoEmpresa = 'mercado',
  temFuncionarios = true;

// Se criar sem valor a variavel recebe undefined
var comidaFavorita;

// Atribuir valor a variavel
comidaFavorita = 'lasanha';

// Para exibir uma variavel no console
console.log(nome, idade, comidaFavorita)

// Existem 7 tipos de dados, o tipo que a variavel será é imutavel 
var nome = 'Rodrigo'; // String variavel de texto
var idade = 28; // Number apenas numeros
var trabalha = true; // Boolean variavel que só pode ser true ou false 
var time; // Undefined não tem um tipo definido pq não recebeu valor nenhum ainda 
var comida = null; // Null uma variavel null é do tipo objeto

var simbolo = Symbol(); // Symbol
var objeto = {}; // Object é um objeto que pode receber diversos valores 

// Para saber qual o tipo podemos usar typeof 
console.log(
  'nome =', typeof nome,
  'idade =', typeof idade,
  'trabalha =', typeof trabalha,
  'time =', typeof time,
  'comida =', typeof comida,
  'simbolo =', typeof simbolo,
  'objeto =', typeof objeto
);

// Template string ao inves de somar strings é possivel adicionar conteudo
//Exemplo sem template string
console.log ('O ' + empresa + ' é um ' + tipoEmpresa);
//Exemplo usando template string usa crase
console.log (`O ${empresa} é um ${tipoEmpresa}`);