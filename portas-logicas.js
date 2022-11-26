var btns = document.querySelectorAll("button");

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

        var tipoPorta = this.name;
        var portas = document.getElementsByName(tipoPorta)

        switch (tipoPorta) {
            case 'portaNot':
                alert(portaNot(this.value));
                break;
            case 'portaAnd':
                alert(portaAnd(portas[0].value, portas[1].value));
                break;
            case 'portaNand':
                alert(portaNand(portas[0].value, portas[1].value));
                break;
            case 'portaOr':
                alert(portaOr(portas[0].value, portas[1].value));
                break;
            case 'portaNor':
                alert(portaNor(portas[0].value, portas[1].value));
                break;
            case 'portaXor':
                alert(portaXor(portas[0].value, portas[1].value));
                break;
            case 'portaNxor':
                alert(portaNxor(portas[0].value, portas[1].value));
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