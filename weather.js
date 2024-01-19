//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

function getWeatherData(inputFromUser) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputFromUser}&appid=834bb3ab5b2146ec93a599d71a0dbdc8`
    )
    .then((response) => {
      Display(response.data);
      // console.log('marker', response);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
document.getElementById('input').addEventListener('input', getInput);

function getInput() {
  let inputValue = document.getElementById('input').value;
  getWeatherData(inputValue);
}

function Display(dataObj) {
  // console.log("obj",dataObj);
  let infoToShow = document.querySelector('.info');
  let ExactTemp = Math.floor(dataObj.main.temp - 273.15);
  let tempMax = Math.floor(dataObj.main.temp_max - 273.15);
  let tempMin = Math.floor(dataObj.main.temp_min - 273.15);
  let NameOfPlace = dataObj.name;

  const daysOfAWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayOfAWeek = daysOfAWeek[new Date().getDay()];
  // console.log("week",dayOfAWeek);
  let DateToday = new Date().toLocaleDateString();
  // console.log("date",DateToday);

  infoToShow.innerHTML = '';
  infoToShow.innerHTML += `<div id="place">${NameOfPlace}</div>
                              <div id="date-day-tag" class="DMY">${dayOfAWeek} ${DateToday}</div>
                              <div class="tempOfPlace">${ExactTemp}<span>'C</span></div>
                              <div id="MinMax"><span id="Min">${tempMin}'C</span> / <span>${tempMax}'C</span>
                           </div>`;
}
