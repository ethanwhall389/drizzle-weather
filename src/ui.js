import Time from "./time";

export default class UI {
    static currentWeather (weatherData) {
        this.dispGeneralInfo(weatherData);
        this.dispSpecificInfo(weatherData);
        console.log('weatherData:');
        console.log(weatherData);
        console.log(`${weatherData.location.name}, ${weatherData.location.region}`);
        console.log('current:');
    }

    static forecastWeather (weatherData) {
        console.log(`${weatherData.day0.location.name}, ${weatherData.day0.location.region}`);
        console.log('forecast:')
        console.log(weatherData);
        this.dispDaily(weatherData);
        this.dispHourly(weatherData);
        
    }

    static dispGeneralInfo (weatherData) {
        const conditions = document.querySelector('.conditions-cont .condition')
        conditions.textContent = weatherData.condition;

        const condCont = document.querySelector('.conditions-cont');
        
        const icon = this.createIcon(weatherData.condition);
        condCont.appendChild(icon);

        const location = document.querySelector('.general-info .location');
        location.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;

        const temp = document.querySelector('.general-info .temp');
        temp.textContent = `${weatherData.tempF}\u00B0`;

        const high = document.querySelector('.general-info .high');
        high.textContent = `High: ${weatherData.highF}\u00B0`;

        const low = document.querySelector('.general-info .low');
        low.textContent = `Low: ${weatherData.lowF}\u00B0`;
    }

    static dispSpecificInfo (weatherData) {
        const sunrise = document.querySelector('.specific-info .sunrise');
        sunrise.textContent = `Sunrise: ${weatherData.sunrise}`;

        const sunset = document.querySelector('.specific-info .sunset');
        sunset.textContent = `Sunset: ${weatherData.sunset}`;

        const precipitation = document.querySelector('.specific-info .rain');
        precipitation.textContent = `Chance of rain: ${weatherData.precipitation}%`;

        const feelsLike = document.querySelector('.specific-info .index');
        feelsLike.textContent = `Feels like: ${weatherData.feelsLikeF}\u00B0`;
    }

    static clearDaily () {
        const daysCont = document.querySelector('.days-cont');
            while (daysCont.firstChild) {
                daysCont.removeChild(daysCont.firstChild);
            }
    }

    static dispDaily (weatherData) {
        this.clearDaily();
        const daysCont = document.querySelector('.days-cont');
        for (let i = 0; i < weatherData.numOfDays; i++) {
            const dayCont = document.createElement('div');
            dayCont.classList.add('day-cont');

            const day = document.createElement('p');
            day.classList.add('day');
            // day.textContent = weatherData[`day${i}`].date;
            day.textContent = weatherData[`day${i}`].dayOfWeek;
            console.log('day:' + weatherData[`day${i}`].dayOfWeek);

            const highLowCont = document.createElement('div');
            highLowCont.classList.add('high-low');

            const high = document.createElement('span');
            high.classList.add('high');
            high.textContent = `H: ${weatherData['day' + i].highF}\u00B0`;
            
            const low = document.createElement('span');
            low.classList.add('low');
            low.textContent = `L: ${weatherData['day' + i].lowF}\u00B0`;

            const icon = this.createIcon(weatherData['day' + i].condition);

            dayCont.appendChild(day);
            highLowCont.appendChild(high);
            highLowCont.appendChild(low);
            dayCont.appendChild(highLowCont)
            dayCont.appendChild(icon);
            daysCont.appendChild(dayCont);
        }
        //use a for loop to go through each 
    }

    static dispHourly (weatherData) {
        //get current time
        const currentTime = Time.getCurrentTime();
        //loop through the hours array for first day.
        //test each hour to see if it is after current time
            //when it is, take that hour and build the dom elements.
        for (let i = 0; i < 24; i++) {
            const hour = weatherData.day0.hourly.hours[i];
            const time = Time.formatTime24(hour.time);
            if (time > currentTime) {
                this.createHour(hour);
            }
        }
    }

    static createHour (hour) {
        const overflowCont = document.querySelector('.overflow-cont');
        
        const hourCont = document.createElement('div');
        hourCont.classList.add('hour-cont');
        
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = Time.formatTime12(hour.time);

        const conditionIcon = this.createIcon(hour.condition.text);
        conditionIcon.classList.add('icon');

        const temp = document.createElement('p');
        temp.classList.add('temp');
        temp.textContent = `${Math.round(hour.temp_f)}\u00B0`;

        overflowCont.appendChild(hourCont);
        hourCont.append(time, conditionIcon, temp);


    }

    static createIcon (con) {
        const icon = document.createElement('i');          

        const low = con.toLowerCase();

        if (low === 'sunny') {
            icon.classList.add('fa-regular', 'fa-sun');
        } else if (low === 'clear') {
            icon.classList.add('fa-regular', 'fa-moon');
        } else if (low === 'partly cloudy') {
            icon.classList.add('fa-solid', 'fa-cloud-sun');
        } else if (low === 'cloudy' || low === 'overcast') {
            icon.classList.add('fa-solid', 'fa-cloud');
        } else if (low === 'mist' || low.includes('drizzle') || low.includes('ice') || low.includes('sleet')) {
            icon.classList.add('fa-solid', 'fa-cloud-rain');
        } else if (low === 'fog') {
            icon.classList.add('fa-solid', 'fa-smog');
        } else if (low.includes('heavy') && low.includes('drizzle') || con.includes('rain')) {
            icon.classList.add('fa-solid', 'fa-cloud-showers-heavy');
        } else if (low.includes('rain')) {
            icon.classList.add('fa-solid', 'fa-cloud-rain');
        } else if (low.includes('snow') || low.includes('blizzard')) {
            icon.classList.add('fa-regular', 'fa-snowflake');
        } else if (low.includes('thundery')) {
            icon.classList.add('fa-solid', 'fa-cloud-bolt');
        }
        return icon;
    }

    static showLoading() {
        console.log('loading...');
        const loading = document.querySelector('.loading-cont');
        loading.classList.remove('hidden');
    }

    static hideLoading() {
        console.log('done loading');
        const loading = document.querySelector('.loading-cont');
        loading.classList.add('hidden');
    }
}