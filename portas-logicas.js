var select = document.getElementById("selectPortaLogica");
var divPortaLogica = document.getElementById("divPortaLogica");
var divImagemNot = document.getElementById("imgNot");
var divImagemAnd = document.getElementById("imgAnd");
var divImagemNand = document.getElementById("imgNand");
var divImagemOr = document.getElementById("imgOr");
var divImagemNor = document.getElementById("imgNor");
var divImagemXor = document.getElementById("imgXor");
var divImagemNxor = document.getElementById("imgNxor");
var divlamapadaApagada = document.getElementById("imgApagada");
var divlamapadaAcesa = document.getElementById("imgAcesa");

select.addEventListener("change", function () {
    divPortaLogica.className = this.options[this.selectedIndex].value;
    resetPortas();
    resetImagens();
    resetLampada();
    if (divPortaLogica.className == "portaNot") {
        btns[1].style.display = "none";
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";

    }
    if (divPortaLogica.className == "portaAnd") {
        divImagemNot.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNand") {
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaOr") {
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNor") {
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaXor") {
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNxor") {
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
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
                if (portaNot(btns[0].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaAnd':
                if (portaAnd(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaNand':
                if (portaNand(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaOr':
                if (portaOr(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaNor':
                if (portaNor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaXor':
                if (portaXor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
            case 'portaNxor':
                if (portaNxor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                };
                break;
        }
    })
}

function resetPortas() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = "btn btn-danger";
        btns[i].value = "false";
        btns[i].textContent = "Off";
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

function resetLampada() {
    divlamapadaAcesa.style.display = "none"
    divlamapadaApagada.style.display = "";
}

function portaNot(entradaA) {
    if (entradaA == "false") {
        return true
    }
    return false
}

function portaAnd(entradaA, entradaB) {
    if ((entradaA == entradaB) && (entradaA == "true")) {
        return true
    }
    return false
}

function portaNand(entradaA, entradaB) {
    if (entradaA == "true" && entradaB == "true") {
        return false
    }
    return true
}

function portaOr(entradaA, entradaB) {
    if (entradaA != entradaB || ((entradaA && entradaB) != "false")) {
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