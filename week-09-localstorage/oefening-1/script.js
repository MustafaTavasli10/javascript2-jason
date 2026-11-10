let input = document.getElementById('input')
let button = document.getElementById('save')
let button2 = document.getElementById('retrieve')
let output = document.getElementById('result')

button.addEventListener('click', () => {
    let inputValue = input.value.trim();
    localStorage.setItem('input value', inputValue)
})

button2.addEventListener('click', () => {
    let getItem = localStorage.getItem('input value')
    
    if(getItem === null || getItem === "") {
        output.value = "Er is nog niets opgeslagen" // Veranderd van textContent naar .value
    } else {
        output.value = getItem; // Veranderd van textContent naar .value
    }
})