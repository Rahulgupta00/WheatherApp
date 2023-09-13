
const API_KEY = 'bbd0cb7d87e8b5e6d45d02d21eb373dd';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationElement = document.getElementById('location');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');


searchBtn.addEventListener('click', searchWeather);

function searchWeather() {
  const country = searchInput.value.trim();
  if (country !== '') {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        updateWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  searchInput.value = '';
}


function updateWeather(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  weatherIconElement.style.backgroundImage = `url(http://openweathermap.org/img/w/${data.weather[0].icon}.png)`;
  temperatureElement.textContent = `${data.main.temp}°C`;
  descriptionElement.textContent = data.weather[0].description;
}

window.addEventListener('load', getWeatherData);
