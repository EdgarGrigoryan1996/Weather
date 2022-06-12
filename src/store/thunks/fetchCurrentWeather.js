import { WeatherService } from "../../services/weatherService"
import { currentWeatherSlice } from "../slices/currentWeatherSlice"

export const fetchCurrentWeather = (payload, payload2) => async (dispatch) => {
	try {
		dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
		const res = await WeatherService.getCurrentWeather(payload, payload2)
		if (res.status === 200) {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
			console.log(res.data.main.temp)
		} else {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
		}
	} catch (error) {
		console.log(error)
	}

}