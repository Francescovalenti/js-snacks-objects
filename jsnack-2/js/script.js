
const input = ['pippo', 'PLUTO', 'Paperino'];
const output = formatostringa(input);
function formatostringa(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}
console.log(output); 
