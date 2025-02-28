//creazione di array animali
const animali = [
    { nome: `Delfino`, famiglia: `delphinidae`, classe: `mammiferi` },
    { nome: `Gatto`, famiglia: `fenidi`, classe: `mammiferi` },
    { nome: `cobra`, famiglia: `elapidi`, classe: `rettili` },
    { nome: `Cavallo`, famiglia: `equidi`, classe: `mammiferi` },
    { nome: `Rana`, famiglia: `ranidi`, classe: `anfibi` },
    { nome: `tartarughe`, famiglia: `Testudinidae`, classe: `rettili` }


]
//creazione della solo array mammiferi
const mammiferi = animali.filter(animali => animali.classe === `mammiferi`)

console.log(mammiferi)