import Convert from "./convert";

export default class Process {
    static currentWeather (data) {
        return {
            'location': {
                'name': data.location.name,
                'region': data.location.region,
                'country': data.location.country
            },
            'tempC': data.current.temp_c,
            'tempF': data.current.temp_f,
            'feelsLikeF': data.current.feelslike_f,
            'feelsLikeC': data.current.feelslike_c,
            'highF': data.forecast.forecastday[0].day.maxtemp_f,
            'highC': data.forecast.forecastday[0].day.maxtemp_c,
            'lowF': data.forecast.forecastday[0].day.mintemp_f,
            'lowC': data.forecast.forecastday[0].day.mintemp_c,
            'condition': data.current.condition.text,
            'precipitation': data.current.precip_in,
            'sunrise': data.forecast.forecastday[0].astro.sunrise,
            'sunset': data.forecast.forecastday[0].astro.sunset
        }
    }

    static forecastWeather (data) {
        console.log(data);
        
        let forecast = {
            'numOfDays': data.forecast.forecastday.length,
        }

        for (let i = 0; i < forecast.numOfDays; i++) {
            forecast[`day${i}`] = {
                'location': {
                    'name': data.location.name,
                    'region': data.location.region,
                    'country': data.location.country
                },
                'date': data.forecast.forecastday[i].date,
                'dayOfWeek': Convert.dateToDay(data.forecast.forecastday[i].date),
                'sunrise': data.forecast.forecastday[i].astro.sunrise,
                'sunset': data.forecast.forecastday[i].astro.sunset,
                'isDark': data.forecast.forecastday[i].astro.is_sun_up,
                'highC': data.forecast.forecastday[i].day.maxtemp_c,
                'highF': data.forecast.forecastday[i].day.maxtemp_f,
                'lowF': data.forecast.forecastday[i].day.mintemp_f,
                'lowC': data.forecast.forecastday[i].day.mintemp_c,
                'condition': data.forecast.forecastday[i].day.condition.text,
                'rainChance': data.forecast.forecastday[i].day.daily_chance_of_rain,
                'snowChance': data.forecast.forecastday[i].day.daily_chance_of_snow,
                'hourly': {
                    'numOfHours': data.forecast.forecastday[i].hour.length,
                    'hours': data.forecast.forecastday[i].hour,
                }
            }
        }
        return forecast;
    }
}