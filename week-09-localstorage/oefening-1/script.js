// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is

let input = document.getElementById('input')
let button = document.getElementById('save')
let button2 = document.getElementById('retrieve')
let output = document.getElementById('result')

button.addEventListener('click', () => {
    let inputValue = input.value.trim();
    localStorage.setItem('input value', inputValue)
})

button2.addEventListener('click', () => {
    let getItem = output.value.trim();
    localStorage.getItem('output value', getItem)
})

