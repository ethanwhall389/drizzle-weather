export default class UI {
    static currentWeather (weatherData) {
        this.generalInfo(weatherData);
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

    static generalInfo (weatherData) {
        const genInfoCont = document.querySelector('.general-info');
        const conditions = document.createElement('p');
        conditions.classList.add('conditions');
        conditions.textContent = weatherData.condition;
        genInfoCont.appendChild(conditions);
        console.log('CONDITIONS: ' + conditions);
    }
}