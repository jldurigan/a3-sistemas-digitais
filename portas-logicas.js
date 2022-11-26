var select = document.getElementById("selectPortaLogica");
var divPortaLogica = document.getElementById("divPortaLogica");

select.addEventListener("change", function(){
    divPortaLogica.className = this.options[this.selectedIndex].value;
});

var btns = document.querySelectorAll("#divPortaLogica button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {

        if (this.value == "false" || this.value == "null") {
            this.textContent = "On";
            this.style.backgroundColor = "green";
            this.value = true;
        } else {
            this.textContent = "Off";
            this.style.backgroundColor = "red";
            this.value = false;
        }

        var tipoPorta = divPortaLogica.className;

        switch (tipoPorta) {
            case 'portaNot':
                alert(portaNot(this.value));
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

function portaNot(entradaA) {
    if (!entradaA) {
        return true
    }
    return false
}

function portaAnd(entradaA, entradaB) {
    if (entradaA && entradaB) {
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
    if (entradaA != entradaB || entradaA && entradaB) {
        return true
    }
    return false
}

function portaNor(entradaA, entradaB) {
    if (!entradaA && !entradaB) {
        return true
    }
    return false
}

function portaXor(entradaA, entradaB) {
    if (entradaA && !entradaB || !entradaA && entradaB) {
        return true
    }
    return false
}

function portaNxor(entradaA, entradaB) {
    if (entradaA && entradaB || !entradaA && !entradaB) {
        return true
    }
    return false
}