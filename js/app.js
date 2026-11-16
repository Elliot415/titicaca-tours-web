// Paso 2
function costoPaquete(adultos, ninos, mes) {
    if (adultos < 1) throw new Error("Debe viajar al menos un adulto");
    let total = (adultos * 85) + (ninos * 45);
    if (adultos + ninos >= 5) total *= 0.9;
    if (mes === 7 || mes === 8) total *= 1.15;
    return Math.round(total * 100) / 100;
}

try {
    const costo = costoPaquete(4, 1, 8);
    document.querySelector("#resultado").textContent = `Paquete (4 adultos, 1 niño, agosto): S/ ${costo.toFixed(2)}`;
} catch (error) {
    console.error(error.message);
}

// Paso 3
const titulo = document.querySelector("h1");
if(titulo) titulo.textContent = "Catálogo de Titicaca Tours";

const imagen = document.querySelector("img");
if(imagen) imagen.setAttribute("alt", "Vista de las Islas de los Uros");

// Paso 4
const paquetes = [
    { nombre: "Uros Básico", detalle: "3 horas", precio: 50, stock: 15 },
    { nombre: "Uros + Taquile", detalle: "Día completo", precio: 85, stock: 8 },
    { nombre: "Amantaní Vivencial", detalle: "2 días", precio: 120, stock: 0 }
];

const lista = document.querySelector("#catalogo");
if(lista) {
    for (const p of paquetes) {
        const tarjeta = document.createElement("li");
        if (p.stock === 0) tarjeta.classList.add("agotado");
        
        const tituloTour = document.createElement("h2");
        tituloTour.textContent = p.nombre;
        
        const precioTour = document.createElement("p");
        precioTour.textContent = `S/ ${p.precio.toFixed(2)}`;
        
        tarjeta.append(tituloTour, precioTour);
        lista.append(tarjeta);
    }
}

const disponibles = paquetes.filter((p) => p.stock > 0).length;
const resumen = document.querySelector("#resumen");
if(resumen) resumen.textContent = `${disponibles} de ${paquetes.length} disponibles.`;