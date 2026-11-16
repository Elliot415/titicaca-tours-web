const destino = "Islas de los Uros";
let pasajeros = 12;
pasajeros += 3;
console.log(typeof destino, typeof pasajeros);
console.log(`${destino}: ${pasajeros} pasajeros`);

console.log("3" + 2, "3" * 2);
console.log("3" === 3, Number("3") + 2);

for (let mes = 6; mes <= 9; mes++) {
    const temporada = mes === 7 || mes === 8 ? "alta" : "baja";
    console.log(`Mes ${mes}: temporada ${temporada}`);
}

const personas = 23;
const capacidad = 8;
console.log(`Se necesitan ${Math.ceil(personas/capacidad)} botes; en el último viajan ${personas%capacidad} personas.`);

function costoPaquete(adultos, ninos, mes) {
    if (adultos < 1) throw new Error("Debe viajar al menos un adulto");
    if (ninos < 0) throw new Error("Niños no puede ser negativo"); 
    
    let total = (adultos * 85) + (ninos * 45);
    if (adultos + ninos >= 5) total *= 0.9;
    if (mes === 7 || mes === 8) total *= 1.15;
    return Math.round(total * 100) / 100;
}

try {
    const costo = costoPaquete(4, 1, 8);
    const res = document.querySelector("#resultado-reserva");
    if (res) res.textContent = `Paquete (agosto): S/ ${costo.toFixed(2)}`; 
} catch (error) {
    console.error(error.message);
}

const titulo = document.querySelector("h1");
if (titulo) titulo.textContent = "Catálogo de Titicaca Tours";

const imagen = document.querySelector("img");
if (imagen) {
    imagen.setAttribute("alt", "Vista panorámica de las Islas de los Uros");
    imagen.classList.add("img-destacada");
}

const paquetes = [
    { nombre: "Uros Básico", precio: 50, stock: 15 },
    { nombre: "Uros + Taquile", precio: 85, stock: 8 },
    { nombre: "Amantaní Vivencial", precio: 120, stock: 0 }
];

const lista = document.querySelector("#catalogo-tours");
if (lista) {
    for (const tour of paquetes) {
        const tarjeta = document.createElement("li");
        if (tour.stock === 0) tarjeta.classList.add("agotado");
        
        const tituloTour = document.createElement("h2");
        tituloTour.textContent = tour.nombre;
        const precioTour = document.createElement("p");
        precioTour.textContent = `S/ ${tour.precio.toFixed(2)}`;
        
        tarjeta.append(tituloTour, precioTour);
        lista.append(tarjeta);
    }
}