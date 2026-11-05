
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const weatherInfo = document.querySelector('#weather-info');


const showWeather = (data) => {
  if (data.cod !== 200) {
    weatherInfo.innerHTML = `<p> class="error">Stad niet gevonden. Probeer het opnieuw.</p>`;
    return;
  }

  const cityName = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const icon = data.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  weatherInfo.innerHTML = `
  <h2>${cityName}</h2>
  <img src="${iconUrl}" alt="Weer icon">
  <p><strong>Temperatuur:</strong> ${temp} °C</p>
  <p><strong>Gevoelstemperatuur:</strong> ${feelsLike} °C</p>
  <p><strong>Luchtvochtigheid:</strong> ${humidity}%</p>
  <p><strong>Windsnelheid:</strong> ${windSpeed} m/s</p>
  `;

};


const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showWeather(data);
  })
  .catch(error => {
    console.error('Fout bij het ophalen:', error);
  });
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city !== '') {
    getWeather(city);
    cityInput.value = '';
  }
});