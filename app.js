// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(nombre);
    input.value = ''; // Limpiar el campo de entrada
    mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a mostrarla

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agregue al menos un nombre para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista de nombres

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;

    amigos = []; // Vaciar el array para un nuevo sorteo
}
