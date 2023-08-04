
let currentCity = 'New York';


// selectors
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const currentTime = document.querySelector('.current__time');

const weatherIcon = document.querySelector('.condition__icon');
const conditionText = document.querySelector('.condition__text');


const currentTemp = document.querySelector('.temperature');
const lastUpdate = document.querySelector('.time');

async function getWeatherData() {

  console.log('working...');


  const API_KEY_2 = 'b3534703539d436aa6f130323233107';// weather API key

  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY_2}&q=${currentCity}&aqi=yes`)

  const data = await response.json();

  console.log(data);

  city.textContent = data.location.name; // display city name
  country.textContent = data.location.country; // display country name
  currentTime.textContent = data.location.localtime // display current time

  weatherIcon.src = data.current.condition.icon; // display weather condition icon
  console.log(weatherIcon);
  conditionText.textContent = data.current.condition.text;

  currentTemp.textContent = data.current.temp_c // display current temperature

  lastUpdate.textContent = data.current.last_updated;
}


document.body.addEventListener('load', getWeatherData());