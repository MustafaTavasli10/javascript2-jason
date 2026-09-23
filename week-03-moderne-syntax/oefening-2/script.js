// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message


let button = document.getElementById("btn-1",)
let button2 = document.getElementById("btn-2")
let button3 = document.getElementById("btn-3")
let p = document.getElementById("message")
let ul = document.getElementById("list")

button.addEventListener("click", () => {

    const message = document.getElementById("message")
    message.textContent = "Ik heb geklikt"
})


button2.addEventListener("click", () => {
    const list = document.getElementById("list")
    list.innerHTML = `<li> Item 1</li>`
});

button3.addEventListener("click", () => {
    p.classList.toggle("active")
})