// -- 012 - Operador Ternário -------- //

let infoStatus = true;
console.log(!infoStatus ? "Verdadeiro" : "Falso");

function showStatus(pPoints) {
    console.log(pPoints <= 100 ? "Comum" : "Premium");
}

let infoClient = 100;
showStatus(infoClient);

infoClient = 200;
showStatus(infoClient);