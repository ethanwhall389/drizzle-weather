import Api from "./api-requests";
import Process from "./process-info";
import UI from "./ui";

const defaultLoc = 'Cape Town, South Africa'

function checkStorage () {
    const lastLoc = localStorage.getItem('lastUsedLoc');
    if (lastLoc != null) {
        loadWeather(lastLoc)
    } else {
        loadWeather(defaultLoc)
    }
}

function requestUserLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {
            //Success
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            loadWeather(`${userLat},${userLon}`);
        }, () => {
            //Failure
            return; //default loc is already loaded.
        })
    }
}

async function loadWeather (query) {
    localStorage.setItem ('lastUsedLoc', query);
    console.log(query);
    const weatherData = await Api.fetchWeather(query)
    const currentWeather = Process.currentWeather(weatherData);
    const forecastWeather = Process.forecastWeather(weatherData);

    UI.currentWeather(currentWeather);
    UI.forecastWeather(forecastWeather);
}

//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    checkStorage();
    requestUserLocation();  
});
