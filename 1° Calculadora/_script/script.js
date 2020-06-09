var operacao
var contador2
cont = 1
var cont2 = 0
var soma1
var resp2
var resp

var botao1 = document.getElementById('1')
var botao2 = document.getElementById('2')
var botao3 = document.getElementById('3')
var botao4 = document.getElementById('4')
var botao5 = document.getElementById('5')
var botao6 = document.getElementById('6')
var botao7 = document.getElementById('7')
var botao8 = document.getElementById('8')
var botao9 = document.getElementById('9')
var botao0 = document.getElementById('0')

var igual = document.getElementById('igual')
var vezes = document.getElementById('multiplicacao')
var soma = document.getElementById('soma')
var sub = document.getElementById('subtracao')
var divisao = document.getElementById('divisao')
var tela = document.getElementById('visor')
var limp = document.getElementById('C')

soma.addEventListener('click', somar)
sub.addEventListener('click', subtrair)
vezes.addEventListener('click', multiplicar)
divisao.addEventListener('click', dividir)
igual.addEventListener('click', resultado)
limp.addEventListener('click', limpar)

botao1.addEventListener('click', numero1)
botao2.addEventListener('click', numero2)
botao3.addEventListener('click', numero3)
botao4.addEventListener('click', numero4)
botao5.addEventListener('click', numero5)
botao6.addEventListener('click', numero6)
botao7.addEventListener('click', numero7)
botao8.addEventListener('click', numero8)
botao9.addEventListener('click', numero9)
botao0.addEventListener('click', numero0)

function numero1() {
  contador = "1"
  tela.value = tela.value + contador
}
function numero2() {
  contador = "2"
  tela.value = tela.value + contador
}
function numero3() {
  contador = "3"
  tela.value = tela.value + contador
}
function numero4() {
  contador = "4"
  tela.value = tela.value + contador
}
function numero5() {
  contador = "5"
  tela.value = tela.value + contador
}
function numero6() {
  contador = "6"
  tela.value = tela.value + contador
}
function numero7() {
  contador = "7"
  tela.value = tela.value + contador
}
function numero8() {
  contador = "8"
  tela.value = tela.value + contador
}
function numero9() {
  contador = "9"
  tela.value = tela.value + contador
}
function numero0() {
  contador = "0"
  tela.value = tela.value + contador
}

function limpar() {
  tela.value = ""
  resp = 0
  delete resp2
  valor1 = 0
  valor2 = 0
  cont = 1
  cont2 = 0
  

}
/*
 * Os visores tem a função de fazer várias contas aninhadas, tipo
 * 5+2/3-5, pois nas operações normais ele pega o último número da tela e sem os
 * visores ele não faria as contas anteriores.
 */

function visor1() {
  resp = Number(tela.value)
  resp2 = resp * resp2
  tela.value = resp2

}

function visor2() {
  resp = Number(tela.value)
  resp2 = resp + resp2
  tela.value = resp2

}

function visor3() {
  resp = Number(tela.value)
  resp2 = resp2 - resp
  tela.value = resp2

}

function visor4() {
  resp = Number(tela.value)
  resp2 = resp2 / resp
  tela.value = resp2

}

/*
 * Aqui ficam as operações na chamada para os visores, o cont2 evita que 
 * em uma conta comum como 4/2 o programa seja direcionado para um visor
*/

function somar() {
  if (operacao == "multiplicar" && cont2 > 0) {
    visor1()
    resp2 = 0
  } else if (operacao == "dividir" && cont2 > 0) {
    visor4()
    resp2 = 0
  } else if (operacao == "subtrair" && cont2 > 0) {
    visor3()
    resp2 = 0
  }
  testedesinais()
  operacao = "somar"
  resp = Number(tela.value)
  tela.value = ""
  pegar(resp, resp2)
  ++cont2
  ++cont

}

function pegar(valor1 = 0, valor2 = 0) {
  valor2 = valor2 + valor1
  resp2 = valor2
}



function multiplicar() {
  if (operacao == "somar" && cont2 > 0) {
    visor2()
    resp2 = 1
  } else if (operacao == "dividir" && cont2 > 0) {
    visor4()
    resp2 = 1
  } else if (operacao == "subtrair" && cont2 > 0) {
    visor3()
    resp2 = 1
  }
  testedesinais()
  operacao = "multiplicar"
  resp = Number(tela.value)
  tela.value = ""
  pegar3(resp, resp2)
  ++cont2
  ++cont
}

function subtrair() {
  if (operacao == "somar" && cont2 > 0) {
    visor2()
    resp2 = 0
    cont = 1
  } else if (operacao == "dividir" && cont2 > 0) {
    visor4()
    resp2 = 0
    cont = 1
  } else if (operacao == "multiplicar" && cont2 > 0) {
    visor1()
    resp2 = 0
    cont = 1
  }
  testedesinais()
  operacao = "subtrair"
  resp = Number(tela.value)
  tela.value = ""
  pegar2(resp, resp2)
  ++cont
  ++cont2

}
function dividir() {
  if (operacao == "somar" && cont2 > 0) {
    visor2()
    resp2 = 1
    cont = 1
  } else if (operacao == "subtrair" && cont2 > 0) {
    visor3()
    resp2 = 1
    cont = 1
  } else if (operacao == "multiplicar" && cont2 > 0) {
    visor1()
    resp2 = 1
    cont = 1
  }
  testedesinais()
  operacao = "dividir"
  resp = Number(tela.value)
  tela.value = ""
  pegar4(resp, resp2)
  ++cont
  ++cont2
}

//RESULTADOS
function resultado() {
  if (operacao == "somar") {
    resp = Number(tela.value)
    tela.value = ""
    resp3 = resp2 + resp
    tela.value = resp3
    resp2 = 0
    cont = 0
    cont2 = 0


  } else if (operacao == "multiplicar") {
    resp = Number(tela.value)
    tela.value = ""
    resp3 = resp2 * resp
    tela.value = resp3
    resp2 = 1
    cont = 0
    cont2 = 0

  } else if (operacao == "subtrair") {
    resp = Number(tela.value)
    tela.value = ""
    if (cont == 0) {
      resp2 = resp
      resp = 0
      cont = 0
      cont2 = 0
    }
    resp3 = resp2 - resp
    tela.value = resp3
    resp2 = 0
    cont = 0
    cont2 = 0

  } else if (operacao == "dividir") {
    resp = Number(tela.value)
    tela.value = ""
    resp3 = resp2 / resp
    tela.value = resp3
    resp2 = 1
    cont = 0
    cont2 = 0
  }
}

// aqui é função principal onde são feitas as contas, o cont serve para evitar 
// erros em operações seguidas com o mesmo operador tipo 10-2-2
function pegar2(valor1 = 0, valor2 = 0) {

  if (valor1 > valor2 && cont == 1 || cont == 0) {
    valor2 = valor1 - valor2
    resp2 = valor2


  } else if (valor2 > valor1 && cont == 1) {
    valor2 = valor2 - valor1
    resp2 = valor2


  } else if (valor2 > valor1 || valor2 < valor1 && cont > 1) {
    valor2 = valor2 - valor1
    resp2 = valor2


  } else if (valor1 == valor2) {
    resp2 = 0

  }

}
function pegar3(valor1 = 1, valor2 = 1) {
  valor2 = valor2 * valor1
  resp2 = valor2


}

function pegar4(valor1 = 1, valor2 = 1) {
  if (valor1 > valor2 && cont == 1 || cont == 0) {
    valor2 = valor1 / valor2
    resp2 = valor2


  } else if (valor2 > valor1 && cont == 1) {
    valor2 = valor2 / valor1
    resp2 = valor2


  } else if (valor2 > valor1 || valor2 < valor1 && cont > 1) {
    valor2 = valor2 / valor1
    resp2 = valor2


  } else if (valor1 == valor2) {
    resp2 = 1
  }

}
function sobreM() {
  p = tela.value * resp
  return p
}

// teste sinais evita erros de operações nas operaões seguidas com o mesmo operador
// tipo 10/2/2
function testedesinais() {
  if ((operacao == "multiplicar" || operacao == "dividir") && cont == 0) {
    resp2 = 0


  } else if ((operacao == "somar" || operacao == "subtrair") && cont == 0) {
    resp2 = 1

  }

}