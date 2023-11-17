export default class UI {
    static currentWeather (weatherData) {
        console.log('weatherData:');
        console.log(weatherData);
        console.log(`${weatherData.location.name}, ${weatherData.location.region}`);
        console.log('current:');
    }

    static forecastWeather (weatherData) {
        console.log(`${weatherData.day0.location.name}, ${weatherData.day0.location.region}`);
        console.log('forecast:')
        console.log(weatherData);
    }
}