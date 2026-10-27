// Fout gevonden: r was fout, er was geen .json, result was fout, in html bestand was de script niet gekoppeld, list.appendChild (list) was fout en in json bestand waren er geen komma's
// Oplossing: r moest response, na users moest .json, result moest results, in html moest script gekoppeld worden, bij list.appendChild(list) moest (li) zijn en in json bestand moest je 2 komma's erbij zetten.

fetch('./users.json')
  .then(Response => Response.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
