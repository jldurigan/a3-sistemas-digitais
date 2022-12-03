var select = document.getElementById("selectPortaLogica");
var divPortaLogica = document.getElementById("divPortaLogica");
var divImagemNot = document.getElementById("imgNot");
var divImagemAnd = document.getElementById("imgAnd");
var divImagemNand = document.getElementById("imgNand");
var divImagemOr = document.getElementById("imgOr");
var divImagemNor = document.getElementById("imgNor");
var divImagemXor = document.getElementById("imgXor");
var divImagemNxor = document.getElementById("imgNxor");
var divImagemTNot = document.getElementById("imgTNot");
var divImagemTAnd = document.getElementById("imgTAnd");
var divImagemTNand = document.getElementById("imgTNand");
var divImagemTOr = document.getElementById("imgTOr");
var divImagemTNor = document.getElementById("imgTNor");
var divImagemTXor = document.getElementById("imgTXor");
var divImagemTNxor = document.getElementById("imgTNxor");
var divImagTV = document.getElementById("divTabelas");
var divSimulacao = document.getElementById("simulacao");
var divlamapadaApagada = document.getElementById("imgApagada");
var divlamapadaAcesa = document.getElementById("imgAcesa");
var divImgSimulacao = document.getElementById("divImgSimulacao");
var divTelaInicial = document.getElementById("divTelaInicial");

select.addEventListener("change", function () {
    divPortaLogica.className = this.options[this.selectedIndex].value;
    resetPortas();
    resetImagens();
    resetLampada();
    resetbtns();
    if (divPortaLogica.className == "portaNot") {
        divTelaInicial.style.display = "none";
        btns[1].style.display = "none";
        btns[0].style.margin = "125px 45%";
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTXor.style.display = "none";
        divImagemTNxor.style.display = "none";

    }
    if (divPortaLogica.className == "portaAnd") {
        divTelaInicial.style.display = "none";
        divImagemNot.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTXor.style.display = "none";
        divImagemTNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNand") {
        divTelaInicial.style.display = "none";
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTXor.style.display = "none";
        divImagemTNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaOr") {
        divTelaInicial.style.display = "none";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTXor.style.display = "none";
        divImagemTNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNor") {
        divTelaInicial.style.display = "none";
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTXor.style.display = "none";
        divImagemTNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaXor") {
        divTelaInicial.style.display = "none";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemNxor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTNxor.style.display = "none";
    }
    if (divPortaLogica.className == "portaNxor") {
        divTelaInicial.style.display = "none";
        divlamapadaAcesa.style.display = "";
        divlamapadaApagada.style.display = "none";
        divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
        divImagemNot.style.display = "none";
        divImagemAnd.style.display = "none";
        divImagemNand.style.display = "none";
        divImagemOr.style.display = "none";
        divImagemNor.style.display = "none";
        divImagemXor.style.display = "none";
        divImagemTNot.style.display = "none";
        divImagemTAnd.style.display = "none";
        divImagemTNand.style.display = "none";
        divImagemTOr.style.display = "none";
        divImagemTNor.style.display = "none";
        divImagemTXor.style.display = "none";
    }
    if (divPortaLogica.className == "default") {
        divTelaInicial.style.display = "";
        divImgSimulacao.style.display = "none";
        btns[0].style.display = "none";
        btns[1].style.display = "none";
        divlamapadaApagada.style.display = "none";
        divImagTV.style.display = "none";
    }
});

var btns = document.querySelectorAll("#divPortaLogica button");
var led = document.getElementById("#ledSaida");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {

        this.value = this.value == "false";

        if (this.value == "true") {
            this.textContent = "1";
            this.className = "btn btn-success";
        } else if (this.value == "false") {
            this.textContent = "0";
            this.className = "btn btn-danger";
        }

        var tipoPorta = divPortaLogica.className;

        switch (tipoPorta) {
            case 'portaNot':
                if (portaNot(btns[0].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaAnd':
                if (portaAnd(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaNand':
                if (portaNand(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaOr':
                if (portaOr(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaNor':
                if (portaNor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaXor':
                if (portaXor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
            case 'portaNxor':
                if (portaNxor(btns[0].value, btns[1].value) == true) {
                    divlamapadaApagada.style.display = "none";
                    divlamapadaAcesa.style.display = "";
                    divSimulacao.style.backgroundColor = "rgb(148, 197, 143)";
                } else {
                    divlamapadaApagada.style.display = "";
                    divlamapadaAcesa.style.display = "none";
                    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
                };
                break;
        }
    })
}

function resetPortas() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = "btn btn-danger";
        btns[i].value = "false";
        btns[i].textContent = "0";
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
    divImgSimulacao.style.display = "";
    divImagTV.style.display = "";
    divImagemTAnd.style.display = "";
    divImagemTNand.style.display = "";
    divImagemTNot.style.display = "";
    divImagemTOr.style.display = "";
    divImagemTNor.style.display = "";
    divImagemTXor.style.display = "";
    divImagemTNxor.style.display = "";
}

function resetLampada() {
    divlamapadaAcesa.style.display = "none"
    divlamapadaApagada.style.display = "";
    divSimulacao.style.backgroundColor = "rgb(230, 139, 139)";
}

function resetbtns() {
    btns[0].style.margin = "";
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