// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigosSorteados = [];

console.log(amigos.length);

// La función está asociada a la información del index.html
function agregarAmigo() {
  // Captura el input usando su id
  let campo = document.getElementById("amigo");
  let nombreIngresado = campo.value;

  if (nombreIngresado.trim() === "") {
    alert("Por favor, ingrese un nombre válido");
  } 
  // Esto es una expresión regular (RegEx), un patrón para comparar cadenas.
  else if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreIngresado)) {
    alert("El nombre solo debe contener letras.");
  } 
  else {
    amigos.push(nombreIngresado.trim());
    console.log("Nombre válido:", nombreIngresado);
    console.log("Cantidad de amigos ingresados: ", amigos.length);
  }

  // agregar función de limpiar caja  
  limpiarcaja();
  mostrarAmigos();
  return;
}

function mostrarAmigos() {
  // 1. Seleccionar la lista UL
  let lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista antes de volver a dibujarla
  lista.innerHTML = "";

  // 3. Recorrer el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un nuevo elemento <li>
    let item = document.createElement("li");
    item.textContent = amigos[i]; // el nombre del arreglo en la posición i

    // 5. Agregar el <li> dentro de la lista UL
    lista.appendChild(item);
  }
}

function limpiarcaja() {
  let valorCaja = document.querySelector('#amigo');
  valorCaja.value = '';
}

function sortearAmigo() {
  // 1) Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  //  Evitar repetir: si ya sorteaste a todos, informar
  if (listaAmigosSorteados.length === amigos.length) {
    document.getElementById('resultado').innerHTML = "Ya se sortearon todos los amigos ingresados.";
    return;
  }

  // 2) Generar un índice aleatorio válido (0 .. amigos.length - 1)
  let indice;
  // Si quieres evitar repetidos, busca uno que no esté en listaAmigosSorteados
  do {
    indice = Math.floor(Math.random() * amigos.length);
  } while (listaAmigosSorteados.includes(indice));

  // Registra el índice sorteado (para no repetir en próximos sorteos)
  listaAmigosSorteados.push(indice);

  // 3) Obtener el nombre sorteado
  let nombre = amigos[indice];

  // 4) Mostrar el resultado en la página
  document.getElementById('resultado').innerHTML = `Amigo secreto: <strong>${nombre}</strong>`;
  console.log("Amigo secreto:", nombre);
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

