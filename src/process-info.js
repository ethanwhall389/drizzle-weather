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
            'condition': data.current.condition.text,
            'precipitation': data.current.precip_in
        }
    }

    static forecastWeather (data) {
        console.log(data);
        return {
            'day0': {
                'location': {
                    'name': data.location.name,
                    'region': data.location.region,
                    'country': data.location.country
                },
                'sunrise': data.forecast.forecastday[0].astro.sunrise,
                'sunset': data.forecast.forecastday[0].astro.sunset,
                'isDark': data.forecast.forecastday[0].astro.is_sun_up,
                'highC': data.forecast.forecastday[0].day.maxtemp_c,
                'highF': data.forecast.forecastday[0].day.maxtemp_f,
                'condition': data.forecast.forecastday[0].day.condition.text,
                'rainChance': data.forecast.forecastday[0].day.daily_chance_of_rain,
                'snowChance': data.forecast.forecastday[0].day.daily_chance_of_snow,
            }
        }
    }
}