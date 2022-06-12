import axios from "axios";
export class WeatherService {

	static getCurrentWeather(lat, lon) {
		console.log(lat, lon)
		return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=892f621da708dfd8156450d7c77f1130`)
	}
}




