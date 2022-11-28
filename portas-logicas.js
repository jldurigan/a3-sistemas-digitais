var select = document.getElementById("selectPortaLogica");
var divPortaLogica = document.getElementById("divPortaLogica");
var divImagemNot = document.getElementById("imgNot");
var divImagemAnd = document.getElementById("imgAnd");
var divImagemNand = document.getElementById("imgNand");
var divImagemOr = document.getElementById("imgOr");
var divImagemNor = document.getElementById("imgNor");
var divImagemXor = document.getElementById("imgXor");
var divImagemNxor = document.getElementById("imgNxor");

select.addEventListener("change", function () {
    divPortaLogica.className = this.options[this.selectedIndex].value;
    resetPortas();
    resetImagens();
    if (divPortaLogica.className == "portaNot"){
        btns[1].style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        
    }
    if (divPortaLogica.className == "portaAnd"){
        divImagemNot.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNand"){
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaOr"){
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNor"){
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaXor"){
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNxor"){
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
    }
});

var btns = document.querySelectorAll("#divPortaLogica button");
var led = document.getElementById("#ledSaida");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {

        this.value = this.value == "false";

        if (this.value == "true") {
            this.textContent = "On";
            this.className = "btn btn-success";
        } else if (this.value == "false") {
            this.textContent = "Off";
            this.className = "btn btn-danger";
        }

        var tipoPorta = divPortaLogica.className;

        switch (tipoPorta) {
            case 'portaNot':
                alert(portaNot(btns[0].value));
                if(portaNot(this.value))
                    led.style.backgroundColor="yellow";
                break;
            case 'portaAnd':
                alert(portaAnd(btns[0].value, btns[1].value));
                break;
            case 'portaNand':
                alert(portaNand(btns[0].value, btns[1].value));
                break;
            case 'portaOr':
                alert(portaOr(btns[0].value, btns[1].value));
                break;
            case 'portaNor':
                alert(portaNor(btns[0].value, btns[1].value));
                break;
            case 'portaXor':
                alert(portaXor(btns[0].value, btns[1].value));
                break;
            case 'portaNxor':
                alert(portaNxor(btns[0].value, btns[1].value));
                break;
        }
    })
}

function resetPortas() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = "btn btn-danger";
        btns[i].value = "false";
        btns[i].style.display = "";
    }
}

function resetImagens() {
    divImagemAnd.style.display = "";
    divImagemNand.style.display = "";
    divImagemNot.style.display = "";
    divImagemOr.style.display = "";
    divImagemNor.style.display = "";
    divImagemXor.style.display = "";
    divImagemNxor.style.display = "";
}

function portaNot(entradaA) {
    if (entradaA == "false") {
        return true
    }
    return false
}

function portaAnd(entradaA, entradaB) {
    if ((entradaA == entradaB) && (entradaA == "true")){
        return true
    }
    return false
}

function portaNand(entradaA, entradaB) {
    if (!entradaA && !entradaB || entradaA != entradaB) {
        return true
    }
    return false
}

function portaOr(entradaA, entradaB) {
    if (entradaA != entradaB || ((entradaA && entradaB)!="false")) {
        return true
    }
    return false
}

function portaNor(entradaA, entradaB) {
    if (((entradaA == "false") && (entradaB == "false"))) {
        return true
    }
    return false
}

function portaXor(entradaA, entradaB) {
    if (entradaA != entradaB) {
        return true
    }
    return false
}

function portaNxor(entradaA, entradaB) {
    if (entradaA == entradaB) {
        return true
    }
    return false
}