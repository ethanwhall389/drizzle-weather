export default class Api {
    static async fetchWeather (query) {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4018e2169c904008a6b05305231711&q=${query}&days=3`, {
            method: "GET",
            mode: "cors",
            // credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        // console.log(data);
        return data
    }
}

