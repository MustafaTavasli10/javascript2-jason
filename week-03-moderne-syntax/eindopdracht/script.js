// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.getElementById("profile-form")
const profiles = document.getElementById("profiles-list")

const button = document.getElementById("btn")

button.addEventListener("click", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const role = document.getElementById("role").value
    const department = document.getElementById("department").value

    if (name == "" || role == "" || department == ""){
        profiles.textContent = "Vul alle velden in"
    } else {
        profiles.innerHTML = `
        <article>
        <h2>${name}</h2>
        <p> Role:${role}</p>
        <p> Department:${department}</p>
        <button id="delete">Verwijder</button>
        </article>
        `
    }
 form.reset();
    document.getElementById("delete").addEventListener("click", (e) => {
        e.preventDefault();
        profiles.remove()
    })

})