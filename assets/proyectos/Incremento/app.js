let contador = 0;

function actualizarColor() {
    let elemento = document.getElementById("contador");

    if (contador >= 10) {
        elemento.style.color = "red";
    } else {
        elemento.style.color = "black";
    }
}

function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
    actualizarColor();
}

function decrementar() {
    contador--;
    document.getElementById("contador").innerText = contador;
    actualizarColor();

    
}