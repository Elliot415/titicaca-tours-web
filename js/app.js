// PASO 1: Ejercicios de Consola
const destinoLog = "Islas de los Uros";
let pasajerosLog = 12;
pasajerosLog += 3;
console.log(typeof destinoLog, typeof pasajerosLog);
console.log(`${destinoLog}: ${pasajerosLog} pasajeros`);

console.log("3" + 2, "3" * 2);
console.log("3" === 3, Number("3") + 2);

for (let mes = 6; mes <= 9; mes++) {
    const temporada = mes === 7 || mes === 8 ? "alta" : "baja";
    console.log(`Mes ${mes}: temporada ${temporada}`);
}

const personasLog = 23;
const capacidadLog = 8;
console.log(`Se necesitan ${Math.ceil(personasLog/capacidadLog)} botes; en el último viajan ${personasLog%capacidadLog} personas.`);

// PASO 2: Función de cálculo en reserva.html
function costoPaquete(pasajeros, destinoSeleccionado) {
    if (pasajeros < 1) throw new Error("Debe viajar al menos un pasajero");
    if (pasajeros < 0) throw new Error("El número de niños no puede ser negativo"); // Corrección de revisión
    
    let precioBase = 0;
    if (destinoSeleccionado === "uros") precioBase = 50;
    else if (destinoSeleccionado === "taquile") precioBase = 85;
    else if (destinoSeleccionado === "sillustani") precioBase = 100;
    else throw new Error("Seleccione un destino válido");

    let total = pasajeros * precioBase;
    if (pasajeros >= 5) total *= 0.9; // 10% descuento grupal
    return Math.round(total * 100) / 100;
}

const formReserva = document.querySelector("#form-reserva");
if (formReserva) {
    formReserva.addEventListener("submit", function(evento) {
        evento.preventDefault(); 
        
        const inputPasajeros = parseInt(document.querySelector("#pasajeros").value);
        const inputDestino = document.querySelector("#destino").value;
        const resultado = document.querySelector("#resultado-reserva");
        
        try {
            const costo = costoPaquete(inputPasajeros, inputDestino);
            resultado.textContent = `Total calculado: S/ ${costo.toFixed(2)}`;
            resultado.style.color = "#0056b3";
        } catch (error) {
            resultado.textContent = error.message;
            resultado.style.color = "red";
        }
    });
}

// PASO 3: Modificar DOM en index.html
const tituloHero = document.querySelector(".hero h2");
const imagenHero = document.querySelector(".hero img");
if (tituloHero && imagenHero) {
    tituloHero.textContent = "Catálogo de Titicaca Tours"; 
    imagenHero.setAttribute("alt", "Vista panorámica del Lago Titicaca en Puno"); 
    imagenHero.classList.add("img-destacada"); 
}

// PASO 4: Generar catálogo dinámico en destinos.html
const paquetes = [
    { nombre: "Islas de los Uros", descripcion: "Comunidades ancestrales sobre islas flotantes de totora.", imagen: "img/uros.jpg" },
    { nombre: "Isla Taquile", descripcion: "Reconocida mundialmente por su fino arte textil.", imagen: "img/taquile.jpg" },
    { nombre: "Chullpas de Sillustani", descripcion: "Imponentes torres funerarias preincas a orillas del lago Umayo.", imagen: "img/sillustani.jpg" }
];

const catalogo = document.querySelector("#catalogo-tours");
if (catalogo) {
    for (const tour of paquetes) { // Corrección: variable 'tour'
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        
        const img = document.createElement("img");
        img.src = tour.imagen;
        img.alt = tour.nombre;
        
        const titulo = document.createElement("h3");
        titulo.textContent = tour.nombre;
        
        const desc = document.createElement("p");
        desc.textContent = tour.descripcion;
        
        const boton = document.createElement("a");
        boton.href = "reserva.html";
        boton.classList.add("btn");
        boton.textContent = "Reservar";
        
        tarjeta.append(img, titulo, desc, boton);
        catalogo.append(tarjeta);
    }
}