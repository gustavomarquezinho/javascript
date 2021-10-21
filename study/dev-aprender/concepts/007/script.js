// -- 007 - Functions -------- //

/*
    • Boas práticas para nomes de funções
        - Verbo + Substantivo
*/

let siteColor = "crimson";

function changeColor(color, shade) {
    siteColor = color + " " + shade;
}

console.log(siteColor);

changeColor("aqua", "claro");
console.log(siteColor);


// -- Exercise --- //

let infoSite = [
    "Site", 100, true
];

function changeSite(name, shade, status) {
    infoSite = [name, shade, status];
}

console.log(infoSite)

changeSite("None", 75, false);
console.log(infoSite)
