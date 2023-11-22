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
    UI.showLoading();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {
            //Success
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            loadWeather(`${userLat},${userLon}`);
        }, () => {
            //Failure
            checkStorage(); //default loc is already loaded.
        }, {enableHighAccuracy: true})
    }
}

async function loadWeather (query) {
    try {
        UI.showLoading();
        localStorage.setItem ('lastUsedLoc', query);

        const weatherData = await Api.fetchWeather(query)
        const currentWeather = Process.currentWeather(weatherData);
        const forecastWeather = Process.forecastWeather(weatherData);
    
        UI.loadBgImage(currentWeather);
        UI.currentWeather(currentWeather);
        UI.forecastWeather(forecastWeather);
        UI.hideLoading();
    
    } catch (error) {
        alert(error);
        console.error(error);
    }
}

function queryWeather () {
    const searchBox = document.querySelector('#search-box');
    if (searchBox.value != '') {
        const query = searchBox.value;
        loadWeather(query);
    }
    searchBox.value = '';
}

//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    requestUserLocation();  
});

const searchBttn = document.querySelector('.search-bttn');
searchBttn.addEventListener('click', queryWeather);

const searchForm = document.querySelector('form');
searchForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        queryWeather();
    }
})
