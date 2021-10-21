// -- 013 - Operadores Lógicos -------- //

/*
    • Operadores Lógicos
        - AND (&&), OR (||), NOT (!)
*/

let infoAge = true, infoCard = true;

let infoStatus = infoAge && infoCard;
console.log(infoStatus);

infoCard = false;

infoStatus = infoAge && infoCard;
console.log(infoStatus)

infoStatus = infoAge || infoCard;
console.log(infoStatus)

infoStatus = !infoAge || infoCard;
console.log("Pode aplicar: ", infoStatus);
console.log("Pode aplicar: ", !infoStatus);