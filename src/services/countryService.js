import axios from "axios";
export class CountryService {

	static getCurrentCountry(city) {
		return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=892f621da708dfd8156450d7c77f1130`)
	}
}




