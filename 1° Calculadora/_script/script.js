let operacaoAcionada = false
let guardar_valor_da_tela 
let guardar_calculo
let oper
let result

/* EVENTOS QUE MUDAM O VALOR DA TELA */
var tela = document.getElementById('visor')

function tamanho_maximo_da_tela(evt) {
  if (tela.value.length >= 9) {
    alert("Número máximo de caracters atingido")
    //evt.preventDefault();
    tela.setAttribute('value', "")
    
  }
}
// INDICA QUANDO UMA OPERAÇÃO É ACIONADA PARA PODER LIMPAR A TELA
function operacao_matematica_acionada() {
  if (operacaoAcionada == true) {
    tela.setAttribute('value', "")
    operacaoAcionada = false
  }

}
/* OPERAÇOES */

function passagem(sinal, valor1, valor2){
  if (sinal === '+' ) {
    result =  Number(valor1) + Number(valor2)
    
  }else if (sinal === '-') {
    result =  Number(valor1) - Number(valor2)
  }else if (sinal === '*') {
    result =  Number(valor1) * Number(valor2)
  }else if (sinal === '/') {
    result =  Number(valor1) / Number(valor2)
  }
  return result 
}

function operacao(sinal){
 
  if (guardar_calculo == undefined) {
     guardar_calculo = tela.getAttribute('value')
     oper = sinal
     operacaoAcionada = true
  }else if (guardar_calculo != undefined){
    guardar_valor_da_tela = tela.getAttribute('value')
    guardar_calculo = passagem(oper, guardar_calculo, guardar_valor_da_tela)
    oper = sinal
    tela.setAttribute('value', guardar_calculo)
    operacaoAcionada = true
  }
  if (sinal === '=') {
    guardar_valor_da_tela = tela.getAttribute('value')
    guardar_calculo = passagem(oper, guardar_calculo, guardar_valor_da_tela)
    tela.setAttribute('value', guardar_calculo)
    operacaoAcionada = false
    guardar_valor_da_tela = undefined
    guardar_calculo = undefined
    oper = undefined
    sinal = undefined
    result = undefined
  }
}

/* BOTÕES NÚMERICOS */
  function numero(num) {
  //tamanho_maximo_da_tela()
  operacao_matematica_acionada()
  tela.setAttribute('value', tela.value.concat(num))  
}

// LIMPAR TELA:
function limpar(){
  operacaoAcionada = false
  guardar_valor_da_tela = undefined
  guardar_calculo = undefined
  oper = undefined
  sinal = undefined
  result = undefined
  tela.setAttribute('value', "")
}
