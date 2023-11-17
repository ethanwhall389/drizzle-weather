import Api from "./api-requests";
import Process from "./process-info";

const loc = prompt('What is your location?');

async function getCurrentWeather () {
    const data = await Api.forcast(loc);
    
    const currentData = Process.currentWeather(data);
    // console.log(currentData);

    logWeather(currentData);

    return currentData;
    // console.log(data);
}

async function getForecast () {
    const data = await Api.forcast(loc);

    const forecastData = Process.forecastWeather(data);
    // console.log(forecastData);

    return forecastData;
    // console.log(data);
}

function logWeather (data) {
    console.log(data);
}


getCurrentWeather();



console.log('hiiii');

