// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

let bestelbedrag = document.getElementById("amount")
let korting = document.getElementById("discount");
let button = document.getElementById("btn");
let resultaat = document.getElementById("result");


function calculateTotal(amount, discount) {
return amount - (amount * discount / 100);
}

button.addEventListener("click",function(e){
    e.preventDefault();

    if (amount.value == "" || discount.value == "") 
    {
        resultaat.textContent = "geen"
    } else {
        resultaat.textContent = calculateTotal(bestelbedrag.value, korting.value);
    }
})










