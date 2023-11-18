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
        }, {enableHighAccuracy: true})
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

function queryWeather () {
    const searchBox = document.querySelector('#search-box');
    if (searchBox.value != '') {
        const query = searchBox.value;
        loadWeather(query);
    } else {
        console.log('Please enter a location');
    }
}

//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    checkStorage();
    requestUserLocation();  
});

const searchBttn = document.querySelector('.search-bttn');
searchBttn.addEventListener('click', queryWeather);
