var btns = document.querySelectorAll("button");

for(var i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", function(event){
            if(this.textContent == "Off" || this.textContent == "Vazio"){
                this.textContent = "On";
                this.style.backgroundColor = "green";
                this.value = true;
            }else{
                this.textContent = "Off";
                this.style.backgroundColor = "red";
                this.value = false;
            }
        alert("Botão clicado: " + this.innerHTML + " " + this.value);
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