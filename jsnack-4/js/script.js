const persone = [
    { nome: `Marco`, cognome: `Bimbati`, eta: `28`},
    { nome: `Salvatore`, cognome: `Quattrocchi`, eta: `17`},
    { nome: `Lara`, cognome:  `zamboni`, eta:`13`},
    { nome: `Luca`, cognome:`Cecere`, eta:`30` },
    { nome: `Giulia`,cognome: `Moretti`, eta:`28`},
    { nome: `Leonardo`, cognome: `Rinaldi`, eta:`42`},
    { nome: `Anna`, cognome: `ferraro`,eta:`65`}

]
const guidainfo= [];



for (let i = 0; i < persone.length; i++){
    const persona = persone [i];
    const puoguidare = persona.eta >= 18 ? "puo guidare" :"non puo guidare";
    guidainfo.push(`${persona.nome}  ${persona.cognome} ${puoguidare},`);

}
console.log(guidainfo)