const input = document.querySelector("input")
const real = document.querySelector(".real")
const button = document.querySelector("button")
const select = document.querySelector(".select")
const dolarHoje = 5.89
const euroHoje = 6.64
const libraHoje = 7.71


function converterValor() {
    const valorDigitado = document.querySelector("input").value
    document.querySelector(".valorParaConverter").innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado)

    if (select.value == "dolar") {
        document.querySelector(".valorConvertido").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDigitado / dolarHoje)
    }
    
    if (select.value == "euro") {
        document.querySelector(".valorConvertido").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDigitado / euroHoje)
    }
    
    if (select.value == "libra") {
        document.querySelector(".valorConvertido").innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorDigitado / libraHoje)
    }

    
    console.log(input.value)
}

function digiteiNoInput() {
    console.log(input.value)
}

function changeSelect (){
    const moedaAlterada = document.querySelector(".text3")
    const bandeiraAlterada = document.querySelector(".img4")

    if (select.value == "dolar") {
        moedaAlterada.innerHTML = "Dolar Americano"
        bandeiraAlterada.src = "./assets/estados-unidos (1) 1.png"
        
    }
    
    
    if (select.value == "euro") {
        moedaAlterada.innerHTML = "Euro"
        bandeiraAlterada.src = "./assets/Design sem nome 3.png"
    }

    if (select.value == "libra") {
        moedaAlterada.innerHTML = "Libra"
        bandeiraAlterada.src = "./assets/libra 1.png"
    }

    converterValor()    
}



select.addEventListener("change", changeSelect )
button.addEventListener("click", converterValor)