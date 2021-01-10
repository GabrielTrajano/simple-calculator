display = document.querySelector("#display-numbers")

function captureNumber(num){
    display.value = display.value+num;
}

function total() {
    valor = eval(display.value)
    if (typeof valor !== "undefined") {
        display.value = valor
    } else {
        alert("Digite uma operação válida!")
    }
}

function toClean(){
    display.value = "";
}

function toBack(){
    previous = display.value
    display.value = previous.substring(0,temp.length-1)
}
