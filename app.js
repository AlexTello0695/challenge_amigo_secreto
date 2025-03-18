const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo () {
    if (validarInput(inputAmigo.value)) {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        //limpiar campo de texto después de agregado el nombre
        limpiarInput();
    }
}

function sortearAmigo () {
    if (listaAmigos.length === 0) {
        alert("Agregar al menos a un amigo antes de empezar el sorteo.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

//Limpiar campo de texto
function limpiarInput () {
    inputAmigo.value = '';
}


//validar campo de texto vacío
function validarInput (valor) {
    if (valor.trim() === ""){
        alert("Debes ingresar un nombre de amigo");
        return false;
    }
    return true;
}


//Agregar nombre con Enter
inputAmigo.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});