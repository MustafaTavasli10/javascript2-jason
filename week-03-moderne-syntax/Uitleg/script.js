
let getName = document.getElementById("showName")

// function showName(name){
//     return "Mijn naam is:" + name
// }

const showName = (name) => {
return `Mijn naam is: ${name}`
}

getName.textContent = showName("Mustafa")

let fruits = ["Appel", "Banaan", "Perzik"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

for(let fruit of fruits){
    getName.textContent = fruit;
}



let title = document.getElementById("title")
let button = document.getElementById("btn")
let section = document.getElementById("section")

button.addEventListener("click", () => {
title.textContent = "Ik heb geklikt"

title.classList.toggle("active")

const p = document.createElement("p")

p.textContent = "Ik voeg een paragraaf toe";

section.appendChild(p)
})