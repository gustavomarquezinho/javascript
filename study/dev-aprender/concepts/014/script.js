// -- 014 - Comparações não booleanas -------- //

/*
    • As comparações nem sempre retornam True ou False, conceito de Truthy e Falsy

        • Falsy
            - Undefined, Null, 0, False, '', NaN

        • Truthy
            - Quando o 'Falsy' não está incluído


        • Comparações entre tipos diferentes
            • Boolean e String
                - Irá retornar a String pois ela se encaixa no Truthy

            • Boolean, Number 1 e Number 2
                - Irá retornar o Number 1, pois é o primeiro valor Truthy
*/

console.log(false || "Gustavo");
console.log(false || 1 || 3);

let customColor = "Red";
let defaultColor = "Blue";

let profileColor = customColor || defaultColor;
console.log(profileColor);

customColor = "";

profileColor = customColor || defaultColor;
console.log(profileColor)