var readlineSync = require("readline-sync")
var nome_meuCaninoFeliz = "Meu Canino Feliz"
var distancia_meuCaninoFeliz = 2
var precoTotal_meuCaninoFeliz = 0
var nome_vaiRex = "Vai Rex"
var distancia_vaiRex = 1.7
var precoTotal_vaiRex = 0
var nome_chowChawgas = " Chow Chawgas"
var distancia_chowChawgas = 0.8
var precoTotal_chowChawgas = 0

var cliente = {
    data:  String(readlineSync.question(
        "Informe a data desejada no formato (ANO/MÊS/DIA): ")),
    quantidadeP: parseInt(readlineSync.question(
        "Informe a quantidade de cães pequenos: ")),
    quantidadeG: parseInt(readlineSync.question(
        "Informe a quantidade de cães grandes: ")),    
  }
  
var agora = new Date(cliente.data)
var diaSem = agora.getDay()

/*
0 = Dom; 1 = Seg; 2 = Ter; 3 = Qua; 4 = Qui; 5 = Sex; 6 = Sáb
*/

function meuCaninoFeliz() {
    var precoPetG_meuCaninoFeliz = 0
    var precoPetP_meuCaninoFeliz = 0
    if(diaSem == 0 || diaSem == 6){
        precoPetG_meuCaninoFeliz = 40 * 1.2
        precoPetP_meuCaninoFeliz = 20 * 1.2
    } else {
        precoPetG_meuCaninoFeliz = 40
        precoPetP_meuCaninoFeliz = 20
    }
    precoTotal_meuCaninoFeliz = (precoPetG_meuCaninoFeliz * cliente.quantidadeG) + (precoPetP_meuCaninoFeliz * cliente.quantidadeP)
}

function vaiRex() {
    var precoPetG_vaiRex = 0
    var precoPetP_vaiRex = 0
    if(diaSem == 0 || diaSem == 6){
        precoPetG_vaiRex = 55
        precoPetP_vaiRex = 20
    } else {
        precoPetG_vaiRex = 50
        precoPetP_vaiRex = 15
    }
    precoTotal_vaiRex = (precoPetG_vaiRex * cliente.quantidadeG) + (precoPetP_vaiRex * cliente.quantidadeP)
}

function chowChawgas() {
    var precoPetG_chowChawgas = 45
    var precoPetP_chowChawgas = 30
    precoTotal_chowChawgas = (precoPetG_chowChawgas * cliente.quantidadeG) + (precoPetP_chowChawgas * cliente.quantidadeP)
}

meuCaninoFeliz()
vaiRex()
chowChawgas()

if(precoTotal_meuCaninoFeliz < precoTotal_vaiRex && precoTotal_meuCaninoFeliz < precoTotal_chowChawgas){
    console.log("O PetShop mais barato é: " + nome_meuCaninoFeliz + "\nE o total a ser pago é R$" + precoTotal_meuCaninoFeliz.toString())
} else if (precoTotal_vaiRex < precoTotal_meuCaninoFeliz && precoTotal_vaiRex < precoTotal_chowChawgas){
    console.log("O PetShop mais barato é: " + nome_vaiRex + "\nE o total a ser pago é R$" + precoTotal_vaiRex.toString())
} else {
    console.log("O PetShop mais barato é: " + nome_chowChawgas + "\nE o total a ser pago é R$" + precoTotal_chowChawgas.toString())
}

if (precoTotal_meuCaninoFeliz < precoTotal_vaiRex && precoTotal_meuCaninoFeliz == precoTotal_chowChawgas){
    if(distancia_meuCaninoFeliz < distancia_chowChawgas){
        console.log("O PetShop mais barato é: " + nome_meuCaninoFeliz + "\nE o total a ser pago é R$" + precoTotal_meuCaninoFeliz.toString()) 
    } else {
        console.log("O PetShop mais barato é: " + nome_chowChawgas + "\nE o total a ser pago é R$" + precoTotal_chowChawgas.toString())
    }
} else if ((precoTotal_meuCaninoFeliz < precoTotal_chowChawgas && precoTotal_meuCaninoFeliz == precoTotal_vaiRex)) {
    if(distancia_meuCaninoFeliz < distancia_vaiRex){
        console.log("O PetShop mais barato é: " + nome_meuCaninoFeliz + "\nE o total a ser pago é R$" + precoTotal_meuCaninoFeliz.toString()) 
    } else {
        console.log("O PetShop mais barato é: " + nome_vaiRex + "\nE o total a ser pago é R$" + precoTotal_vaiRex.toString())
    }
}

if (precoTotal_vaiRex < precoTotal_meuCaninoFeliz && precoTotal_vaiRex == precoTotal_chowChawgas){
    if(distancia_vaiRex < distancia_chowChawgas){
        console.log("O PetShop mais barato é: " + nome_vaiRex + "\nE o total a ser pago é R$" + precoTotal_vaiRex.toString())
    } else {
        console.log("O PetShop mais barato é: " + nome_chowChawgas + "\nE o total a ser pago é R$" + precoTotal_chowChawgas.toString()) 
    }
} else if (precoTotal_vaiRex < precoTotal_chowChawgas && precoTotal_vaiRex == precoTotal_meuCaninoFeliz){
    if (distancia_vaiRex < distancia_meuCaninoFeliz){
        console.log("O PetShop mais barato é: " + nome_vaiRex + "\nE o total a ser pago é R$" + precoTotal_vaiRex.toString())     
    } else {
        console.log("O PetShop mais barato é: " + nome_meuCaninoFeliz + "\nE o total a ser pago é R$" + precoTotal_meuCaninoFeliz.toString())
    }
}

if (precoTotal_chowChawgas < precoTotal_meuCaninoFeliz && precoTotal_chowChawgas == precoTotal_vaiRex){
    if(distancia_chowChawgas < distancia_vaiRex){
        console.log("O PetShop mais barato é: " + nome_chowChawgas + "\nE o total a ser pago é R$" + precoTotal_chowChawgas.toString()) 
    } else {
        console.log("O PetShop mais barato é: " + nome_vaiRex + "\nE o total a ser pago é R$" + precoTotal_vaiRex.toString())
    }
} else if (precoTotal_chowChawgas < precoTotal_vaiRex && precoTotal_chowChawgas == precoTotal_meuCaninoFeliz){
    if(distancia_chowChawgas < distancia_meuCaninoFeliz){
        console.log("O PetShop mais barato é: " + nome_chowChawgas + "\nE o total a ser pago é R$" + precoTotal_chowChawgas.toString()) 
    }
    console.log("O PetShop mais barato é: " + nome_meuCaninoFeliz + "\nE o total a ser pago é R$" + precoTotal_meuCaninoFeliz.toString())
}

