let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (typeof nombreAmigo === 'string' && nombreAmigo !== '') {
        listaAmigos.push(nombreAmigo);
        inputAmigo.value = '';
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; 
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista de amigos está vacía. Agrega al menos un amigo.');
        return;
    }
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; 
    const li = document.createElement('li');
    li.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    resultadoElement.appendChild(li);
}