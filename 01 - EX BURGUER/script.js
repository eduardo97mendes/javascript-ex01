/* ============================================================
   BURGER HOUSE
   LABORATÓRIO DE JAVASCRIPT
   ============================================================

   OBJETIVO:

   Neste arquivo vamos estudar:

   01 - Variáveis
   02 - var
   03 - Case Sensitive
   04 - let
   05 - const
   06 - Escopo
   07 - Hoisting
   08 - Nomes de variáveis
   09 - Tipos de dados
   10 - String
   11 - Template Literals
   12 - Number
   13 - Boolean
   14 - Undefined
   15 - Null
   16 - Conversão
   17 - Coerção

   IMPORTANTE:

   Leia cada etapa.

   Primeiro veja o EXEMPLO.

   Depois faça as PRÁTICAS.

   Os exercícios estão dentro de comentários
   para que o código principal continue funcionando.
*/


/* ============================================================
   ETAPA 01
   VARIÁVEIS
   ============================================================

   EXPLICAÇÃO:

   Uma variável é um espaço na memória utilizado
   para guardar uma informação.

   Podemos guardar:

   - nomes
   - números
   - preços
   - textos
   - verdadeiro/falso
   - resultados

   EXEMPLO:
*/


let cliente = "Eduardo";

let idade = 29;

console.log(cliente);

console.log(idade);


/*
   PRÁTICA 01

   Crie uma variável chamada "nomeCliente".

   Escolha uma das opções:

   let
   var
   const

   Complete:

   ___ nomeCliente = "Seu Nome";


   PRÁTICA 02

   Crie uma variável para armazenar sua idade:

   ___ minhaIdade = ___;


   PRÁTICA 03

   Crie uma variável para guardar o nome
   do seu hambúrguer favorito:

   ___ meuHamburguer = "___";
*/


/* ============================================================
   ETAPA 02
   VAR
   ============================================================

   O "var" é uma forma antiga de criar variáveis
   em JavaScript.

   EXEMPLO:
*/

var cidade = "Laguna";

console.log(cidade);


/*
   PRÁTICA:

   Crie uma variável utilizando var.

   Opções:

   var
   let
   const

   Complete:

   ___ minhaCidade = "___";

   Depois:

   console.log(___);
*/


/* ============================================================
   ETAPA 03
   CASE SENSITIVE
   ============================================================

   JavaScript diferencia letras maiúsculas
   de letras minúsculas.

   EXEMPLO:
*/

let nome = "Eduardo";

let Nome = "João";

console.log(nome);

console.log(Nome);


/*
   PERCEBA:

   nome
   Nome

   São duas variáveis diferentes.


   PRÁTICA:

   Crie três variáveis:

   let aluno = "___";

   let Aluno = "___";

   let ALUNO = "___";


   Depois mostre as três no console.
*/


/* ============================================================
   ETAPA 04
   LET
   ============================================================

   "let" é utilizado quando o valor pode mudar.

   EXEMPLO:
*/

let quantidade = 1;

quantidade = 2;

console.log(quantidade);


/*
   PRÁTICA:

   Crie uma variável chamada pontos.

   Comece com 0.

   Depois altere para 10.

   ___ pontos = ___;

   pontos = ___;

   console.log(pontos);


   OPÇÕES:

   let
   var
   const

   0
   5
   10
   100
*/


/* ============================================================
   ETAPA 05
   CONST
   ============================================================

   "const" é utilizado quando não queremos
   trocar o valor da variável.

   EXEMPLO:
*/

const nomeRestaurante = "Burger House";

console.log(nomeRestaurante);


/*
   PRÁTICA:

   Crie uma constante chamada:

   precoHamburguer

   Valor:

   24.90

   Complete:

   ___ precoHamburguer = ___;


   OPÇÕES:

   const
   let
   var

   19.90
   24.90
   29.90
*/


/* ============================================================
   ETAPA 06
   ESCOPO
   ============================================================

   Escopo significa o local onde uma variável
   pode ser utilizada.

   let e const respeitam blocos.

   EXEMPLO:
*/

let restaurante = "Burger House";

if (true) {

    let horario = "18:00";

    console.log(horario);
}

console.log(restaurante);


/*
   PRÁTICA:

   Crie uma variável dentro de um if.

   if (true) {

       let ___ = "___";

       console.log(___);

   }


   OPÇÕES DE NOME:

   horario
   endereco
   pedido
   cliente
*/


/* ============================================================
   ETAPA 07
   HOISTING
   ============================================================

   Hoisting é o comportamento do JavaScript
   de processar algumas declarações antes
   da execução do código.

   EXEMPLO COM VAR:
*/

console.log(produtoHoisting);

var produtoHoisting = "Hambúrguer";


/*
   Observe:

   O resultado será:

   undefined

   e não "Hambúrguer".

   Isso acontece porque a declaração da variável
   foi elevada, mas o valor ainda não havia sido atribuído.


   PRÁTICA:

   Analise:

   console.log(quantidadeHoisting);

   var quantidadeHoisting = 10;


   Pergunta:

   O resultado será:

   A) 10
   B) undefined
   C) null
   D) erro
*/


/* ============================================================
   ETAPA 08
   NOMES DE VARIÁVEIS
   ============================================================

   Podemos utilizar nomes como:

   nome
   idade
   preco
   quantidadeProdutos
   nomeCliente

   É comum utilizar camelCase:

   nomeDoCliente
   precoDoProduto
   quantidadeDoPedido

   EVITE:

   1nome
   nome cliente
   nome-cliente


   PRÁTICA:

   Qual seria um nome melhor?

   A) 1cliente

   B) nome cliente

   C) nomeCliente

   D) nome-cliente
*/


/* ============================================================
   ETAPA 09
   TIPOS DE DADOS
   ============================================================

   Alguns tipos importantes:

   String
   Number
   Boolean
   Undefined
   Null

   EXEMPLO:
*/

let exemploString = "Burger";

let exemploNumber = 25;

let exemploBoolean = true;

let exemploUndefined;

let exemploNull = null;

console.log(exemploString);

console.log(exemploNumber);

console.log(exemploBoolean);

console.log(exemploUndefined);

console.log(exemploNull);


/*
   PRÁTICA:

   Crie:

   let nomeAluno = "___";

   let notaAluno = ___;

   let aprovado = ___;

   let observacao;

   let resultado = null;


   OPÇÕES:

   "Eduardo"
   8
   10
   true
   false
*/


/* ============================================================
   ETAPA 10
   STRING
   ============================================================

   String representa texto.

   Pode ser escrita com:

   "texto"

   'texto'

   `texto`

   EXEMPLO:
*/

let sabor = "Bacon";

console.log(sabor);


/*
   PRÁTICA 01:

   Crie:

   let ingrediente = "___";


   PRÁTICA 02:

   Crie:

   let bebida = "___";


   PRÁTICA 03:

   Mostre uma frase:

   console.log("Meu hambúrguer tem ___");
*/


/* ============================================================
   ETAPA 11
   TEMPLATE LITERALS
   ============================================================

   Template Literals utilizam crases:

   `texto`

   Podemos colocar variáveis dentro:

   ${variavel}

   EXEMPLO:
*/

let clienteTemplate = "Eduardo";

let pedidoTemplate = "Bacon Burger";

console.log(
    `Olá ${clienteTemplate}, seu pedido é ${pedidoTemplate}.`
);


/*
   PRÁTICA:

   Crie:

   let aluno = "___";

   let linguagem = "JavaScript";

   Depois:

   console.log(
       `Olá ___, você está estudando ___.`
   );


   Complete as duas partes.
*/


/* ============================================================
   ETAPA 12
   NUMBER
   ============================================================

   Number representa números.

   Pode ser:

   inteiro:

   10

   decimal:

   24.90

   EXEMPLO:
*/

let preco = 24.90;

let quantidadePedido = 2;

let total = preco * quantidadePedido;

console.log(total);


/*
   PRÁTICA:

   Crie:

   let precoProduto = ___;

   let quantidadeProduto = ___;

   let resultado = precoProduto * quantidadeProduto;

   console.log(resultado);


   OPÇÕES:

   10
   15
   20
   2
   3
   5
*/


/* ============================================================
   ETAPA 13
   BOOLEAN
   ============================================================

   Boolean possui apenas dois valores:

   true
   false

   EXEMPLO:
*/

let lojaAberta = true;

console.log(lojaAberta);


/*
   PRÁTICA:

   Crie uma variável:

   let alunoPresente = ___;


   OPÇÕES:

   true
   false
*/


/* ============================================================
   ETAPA 14
   UNDEFINED
   ============================================================

   Uma variável pode existir sem possuir
   um valor definido.

   EXEMPLO:
*/

let pedidoSemValor;

console.log(pedidoSemValor);


/*
   PRÁTICA:

   Crie:

   let telefoneCliente;

   Depois:

   console.log(telefoneCliente);
*/


/* ============================================================
   ETAPA 15
   NULL
   ============================================================

   null representa ausência intencional de valor.

   EXEMPLO:
*/

let cupomAtual = null;

console.log(cupomAtual);


/*
   PRÁTICA:

   Crie uma variável chamada:

   produtoSelecionado

   e coloque null nela.

   Complete:

   let produtoSelecionado = ___;
*/


/* ============================================================
   ETAPA 16
   CONVERSÃO DE TIPOS
   ============================================================

   Às vezes recebemos um número como texto.

   EXEMPLO:
*/

let valorTexto = "25";

let valorNumero = Number(valorTexto);

console.log(valorNumero);

console.log(typeof valorNumero);


/*
   PRÁTICA:

   Crie:

   let idadeTexto = "18";

   Depois transforme em número:

   let idadeNumero = ___(idadeTexto);


   OPÇÕES:

   Number
   String
   Boolean
*/


/* ============================================================
   ETAPA 17
   COERÇÃO DE TIPOS
   ============================================================

   Coerção acontece quando o JavaScript
   tenta converter tipos automaticamente.

   EXEMPLO:
*/

let resultadoCoercao = 10 + "5";

console.log(resultadoCoercao);


/*
   Resultado:

   "105"

   Por quê?

   Porque o JavaScript transformou o número
   em texto para realizar a operação.


   PRÁTICA:

   Analise:

   console.log(20 + "10");

   Resultado:

   A) 30
   B) "2010"
   C) 2010
   D) erro


   Depois teste:

   console.log(20 - "10");

   Resultado esperado:

   10
*/


/* ============================================================
   AGORA VAMOS USAR JAVASCRIPT NA PÁGINA
   ============================================================ */


/* ============================================================
   FUNÇÃO 01
   MOSTRAR BOAS-VINDAS
   ============================================================

   Uma função é um bloco de código
   que pode ser executado quando necessário.

   EXEMPLO:
*/

function mostrarBoasVindas() {

    document.getElementById("mensagem").textContent =
        "🍔 Bem-vindo à Burger House!";

}


/*
   PRÁTICA:

   Crie uma função chamada:

   ___ mostrarMensagem() {

       document.getElementById("mensagem").textContent =
           "___";

   }

   OPÇÕES:

   function
   mostrarMensagem
   mostrarBoasVindas

   Textos:

   "Olá!"
   "Bem-vindo ao nosso restaurante!"
   "Faça seu pedido!"
*/


/* ============================================================
   FUNÇÃO 02
   PARÂMETRO
   ============================================================

   Um parâmetro permite receber uma informação
   dentro da função.

   EXEMPLO:
*/

function adicionarProduto(precoProduto) {

    quantidadePedido++;

    total = total + precoProduto;

    document.getElementById("quantidade").textContent =
        quantidadePedido;

    document.getElementById("quantidadeResumo").textContent =
        quantidadePedido;

    document.getElementById("total").textContent =
        total.toFixed(2);

}


/*
   Observe:

   precoProduto

   é o parâmetro.


   PRÁTICA:

   Crie uma função:

   function mostrarPreco(___) {

       console.log(___);

   }


   OPÇÕES:

   preco
   valor
   produto
*/


/* ============================================================
   FUNÇÃO 03
   OPERADORES
   ============================================================

   Podemos utilizar:

   +
   -
   *
   /
   %

   EXEMPLO:

   quantidadePedido++;

   significa:

   quantidadePedido = quantidadePedido + 1;
*/


/*
   PRÁTICA:

   Faça um contador:

   let contador = 0;

   contador ___;

   console.log(contador);


   OPÇÕES:

   ++
   --
   +
   -
*/


/* ============================================================
   CUPOM DE DESCONTO
   ============================================================ */

const cupomValido = "BURGER10";


function aplicarCupom() {

    const cupomDigitado =
        document.getElementById("cupom").value;

    if (cupomDigitado === cupomValido) {

        total = total * 0.90;

        document.getElementById("total").textContent =
            total.toFixed(2);

        document.getElementById("resultadoCupom").textContent =
            "🎉 Cupom aplicado! 10% de desconto.";

    } else {

        document.getElementById("resultadoCupom").textContent =
            "❌ Cupom inválido.";

    }

}


/*
   PRÁTICA:

   Troque o cupom.

   const cupomValido = "___";

   Escolha:

   BURGER10
   ALUNO10
   JS10
   TURMA303


   Depois teste na página.
*/


/* ============================================================
   LIMPAR PEDIDO
   ============================================================ */

function limparPedido() {

    quantidadePedido = 0;

    total = 0;

    document.getElementById("quantidade").textContent = 0;

    document.getElementById("quantidadeResumo").textContent = 0;

    document.getElementById("total").textContent = "0.00";

    document.getElementById("resultadoCupom").textContent = "";

}


/* ============================================================
   MODO ESCURO
   ============================================================

   classList.toggle()

   adiciona ou remove uma classe.
   ============================================================ */

function alternarTema() {

    document.body.classList.toggle("dark");

}


/*
   PRÁTICA:

   Troque:

   toggle

   por:

   ___

   OPÇÕES:

   add
   remove
   toggle
*/


/* ============================================================
   FORMULÁRIO
   ============================================================ */

function enviarFormulario(event) {

    event.preventDefault();

    const nomeCliente =
        document.getElementById("nome").value;

    document.getElementById("resposta").textContent =
        `Obrigado pela mensagem, ${nomeCliente}!`;

}


/*
   PRÁTICA:

   Altere a mensagem:

   `Olá ${nomeCliente}!`

   para alguma mensagem criada por você.


   EXEMPLO:

   `Obrigado, ${nomeCliente}!`
*/


/* ============================================================
   IF / ELSE
   ============================================================

   if = se

   else = caso contrário
   ============================================================ */

let restauranteAberto = true;


function verificarRestaurante() {

    if (restauranteAberto === true) {

        console.log("Restaurante aberto!");

    } else {

        console.log("Restaurante fechado!");

    }

}


/*
   PRÁTICA:

   Troque:

   restauranteAberto = ___;


   OPÇÕES:

   true
   false

   O que acontece no console?
*/


/* ============================================================
   FINALIZAR PEDIDO
   ============================================================ */

function finalizarPedido() {

    if (quantidadePedido === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }


    if (restauranteAberto === true) {

        alert(
            `Pedido realizado!
             Quantidade: ${quantidadePedido}
             Total: R$ ${total.toFixed(2)}`
        );

    } else {

        alert(
            "Desculpe, o restaurante está fechado."
        );

    }

}


/* ============================================================
   DESAFIO FINAL
   ============================================================

   Agora crie uma função para calcular o frete.

   REGRA:

   O frete será:

   distância × 2


   EXEMPLO:

   function calcularFrete(distancia) {

       const frete = distancia * 2;

       console.log(
           `Frete: R$ ${frete.toFixed(2)}`
       );

   }


   Depois execute:

   calcularFrete(5);


   PRÁTICA:

   Troque o valor:

   calcularFrete(___);


   OPÇÕES:

   2
   5
   10
   15
*/


/* ============================================================
   DESAFIO EXTRA
   ============================================================

   Crie uma função chamada:

   calcularDesconto()

   Ela deverá:

   1. Receber um preço.

   2. Aplicar 10% de desconto.

   3. Mostrar o resultado no console.


   MODELO:

   function calcularDesconto(preco) {

       const desconto = preco * ___;

       console.log(
           `Preço com desconto: R$ ${desconto.toFixed(2)}`
       );

   }


   Complete:

   ___ calcularDesconto(preco) {

       const desconto = preco * ___;

       console.log(
           `Preço com desconto: R$ ${desconto.toFixed(___)}`
       );

   }


   OPÇÕES:

   function
   0.90
   0.10
   2
   1
*/


/* ============================================================
   CHECKLIST DO MÓDULO
   ============================================================

   [ ] Variáveis

   [ ] var

   [ ] let

   [ ] const

   [ ] Case Sensitive

   [ ] Escopo

   [ ] Hoisting

   [ ] Nomes de variáveis

   [ ] String

   [ ] Template Literals

   [ ] Number

   [ ] Boolean

   [ ] Undefined

   [ ] Null

   [ ] Conversão

   [ ] Coerção

   [ ] Funções

   [ ] Parâmetros

   [ ] Operadores

   [ ] if / else

   [ ] Manipulação do HTML

   [ ] Eventos

   [ ] classList

   [ ] Projeto prático
*/


/* ============================================================
   MISSÃO FINAL DO ALUNO
   ============================================================

   Personalize a Burger House:

   1. Troque o nome do restaurante.

   2. Troque os nomes dos hambúrgueres.

   3. Troque os preços.

   4. Crie um novo cupom.

   5. Altere a mensagem de boas-vindas.

   6. Altere a mensagem do formulário.

   7. Crie um novo cálculo utilizando JavaScript.

   8. Teste o modo escuro.

   9. Teste o carrinho.

   10. Explique para a turma pelo menos
       três partes do JavaScript que você utilizou.
*/


console.log("🍔 Burger House carregada com sucesso!");