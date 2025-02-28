// 1. creazione del Array di automobili

const automobili = [
    { marca: "fiat", modello: "panda", alimentazione: "benzina" },
    { marca: "volkswagen", modello: "golf", alimentazione: "diesel" },
    { marca: "tesla", modello: "model 3 ", alimentazione: "elettrico" },
    { marca: "Ford", modello: "focus", alimentazione: "benzina" },
    { marca: "bmw", modello: "x5", alimentazione: "diesel" },
    { marca: "renault", modello: "Clio", alimentazione: "gpl" },
    { marca: "audi", modello: "A4", alimentazione: "diesel" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
    { marca: "Opel", modello: "Corsa", alimentazione: "benzina" },
    { marca: "mercedes", modello: "classe A", alimentazione: "diesel" },
]
//creazione degli array separati



const benzina = automobili.filter(automobili => automobili.alimentazione === "benzina");
const diesel = automobili.filter(automobili => automobili.alimentazione === "diesel");
const altre = automobili.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");

console.log(benzina)
console.log(diesel)
console.log(altre)