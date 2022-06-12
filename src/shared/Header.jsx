import Logo from "../assets/img/icons/weather.png"
import "./Header.css"
import Select from "react-select"
import { useCustomDispatch, useCustomSelector } from "../hooks/store"
import { currentCountrySlice } from "../store/slices/currentCountrySlice"
import { fetchCurrentCountry } from "../store/thunks/fetchCurrentCountryCoords"
import { useEffect } from "react"
import { useState } from "react"
import { fetchCurrentWeather } from "../store/thunks/fetchCurrentWeather"
export default function Header() {
	const country = useCustomSelector((state) => state.currentCountrySliceReducer.countryName)
	const coords = useCustomSelector((state) => state.currentCountrySliceReducer.response)
	const dispatch = useCustomDispatch()
	const [count, setCount] = useState(0)
	useEffect(() => {
		if (count === 0) {
			setCount(1)
		}
		else {
			dispatch(fetchCurrentCountry(country))
			dispatch(fetchCurrentWeather(coords.lat, coords.lon))
		}
	}, [country])
	const options = [
		{
			value: "Armenia",
			label: "Armenia"
		},
		{
			value: "Paris",
			label: "Paris"
		},
		{
			value: "Rus",
			label: "Rus"
		}
	]
	const changeCountry = (value) => {
		console.log("this is select onchange " + value)
		dispatch(currentCountrySlice.actions.fetchCurrentCountrySuccess(value))

	}
	return (
		<header>
			<div className="header-wrapper">
				<div className="header-block">
					<div className="header-logo">
						<div className="logo">
							<img src={Logo} alt="" />
						</div>
						<div className="title">React Weather</div>
					</div>
					<div className="change-country">
						<Select
							defaultValue={options[0]}
							options={options}
							onChange={(e) => {
								changeCountry(e.value)
							}}
						/>
					</div>
				</div>
			</div>
		</header>

	)
}
