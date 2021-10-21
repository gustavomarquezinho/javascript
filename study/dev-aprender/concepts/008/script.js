// -- 008 - Tipos de Funções -------- //

/*
    • Procedimento
        - Realiza uma tarefa e não retorna um valor

    • Função
        - Realiza uma tarefa e retorna um valor
*/

function sayName() {
    console.log("Gustavo");
}

sayName();

function returnSum(pNum1, pNum2) {
    return pNum1 + pNum2;
}

console.log(returnSum(5, 7));