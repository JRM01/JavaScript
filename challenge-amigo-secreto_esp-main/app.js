// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos  = [];

function agregarAmigo(nombre){
    let amigo = String(document.getElementById("amigo").value);
    if(amigo == ""){
        alert("Por favor ingresa un nombre válido");

    } else{
    nombresAmigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostraramigos();
    }
}

function mostraramigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < nombresAmigos.length; i++){
        let li = document.createElement("li");
        li.innerText = nombresAmigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo(){
    if(nombresAmigos.length ==0){
        alert("Por favor ingresa al menos un nombre");
    }
    else{
        let amigo = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
        document.getElementById("resultado").innerText = "El amigo secreto es: " + amigo;
    }
}
