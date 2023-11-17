export default class Api {
    static async fetchWeather (query) {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4018e2169c904008a6b05305231711&q=${query}&days=3`, {mode: "cors"})
        const data = await response.json();
        // console.log(data);
        return data
    }
}

