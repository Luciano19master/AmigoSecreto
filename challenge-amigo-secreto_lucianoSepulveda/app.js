// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*let listaAmigos = [];

let nuevoAmigo = document.getElementById("amigo");

function agregarAmigo() {
    let amigo = nuevoAmigo.value;
    if (amigo !== "") {
        listaAmigos.push(amigo);
        let amigoElement = document.createElement("li");
        amigoElement.textContent = amigo;
        document.getElementById("listaAmigos").appendChild(amigoElement);
        nuevoAmigo.value = "";
    }else{
        alert("Por favor, ingresa un nombre válido.");
    }
}

function sortearAmigo() {
    let amigoSorteado= listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let amigoElement = document.createElement("p");
    amigoElement.textContent = amigoSorteado;
    document.getElementById("resultado").appendChild(amigoElement);
} */

    let listaAmigos = []; // Lista de amigos

    function agregarAmigo() {
        let nuevoAmigo = document.getElementById("amigo"); 
        let amigo = nuevoAmigo.value.trim(); 
    
        if (amigo !== "") {
            listaAmigos.push(amigo);
            actualizarLista(); 
            nuevoAmigo.value = "";
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    }
    
    // Función para actualizar la lista en el HTML
    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; 
    
        for (let amigo of listaAmigos) {
            lista.innerHTML += `<li>${amigo}</li>`; 
        }
    }
    
    // Función para sortear un ganador aleatorio
    function sortearAmigo() {
        if (listaAmigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
    
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let ganador = listaAmigos[indiceAleatorio];
    
        document.getElementById("resultado").innerHTML = `<li>${ganador} es el ganador 🎉</li>`;
    }
    
