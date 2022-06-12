import { useEffect } from "react"
import { useCustomDispatch, useCustomSelector } from "../../hooks/store"
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather"
import ThisDay from "./Components/ThisDay"
import ThisDayInfo from "./Components/ThisDayInfo"
import "./Home.css"
export default function Home() {
	const country = useCustomSelector((state) => state.currentCountrySliceReducer.countryName)
	const weather = useCustomSelector((state) => state.currentWeatherSliceReducer.weather)
	const coords = useCustomSelector((state) => state.currentCountrySliceReducer.response)
	console.log(coords)
	const dispatch = useCustomDispatch()
	useEffect(() => {
		dispatch(fetchCurrentWeather(coords.lat, coords.lon))
	}, [])
	return (
		<div className="home-wrapper">
			<div className="this-day-wrapper">
				<ThisDay weather={weather} />
				<ThisDayInfo />
			</div>

		</div>

	)
}
