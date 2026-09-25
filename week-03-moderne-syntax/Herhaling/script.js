
const titel = document.getElementById("title")
const button = document.getElementById("btn")
const sectie = document.getElementById("section")

const naam = 'Mustafa'
const opleiding = 'Software Developer MBO niveau 4'
let aantaalKlikken = 0;

const berekenPunten = (aantaalKlikken) => {
   return aantaalKlikken * 10
   
}

console.log(berekenPunten(3));

button.addEventListener('click', () => {
    aantaalKlikken += 1;
    titel.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}.`;
    titel.classList.toggle('active');
    p = document.createElement("p")
    p.textContent = `klik ${aantaalKlikken}: je hebt nu ${berekenPunten(aantaalKlikken)} punten`
    sectie.appendChild(p);
})