import { createSlice } from "@reduxjs/toolkit"
const initialState = {
	countryName: "Armenia",
	response: {
		lat: "4.536307",
		lon: "-75.6723751"
	}
}

export const currentCountrySlice = createSlice({
	name: "current_country",
	initialState,
	reducers: {
		fetchCurrentCountrySuccess(state, action) {
			state.countryName = action.payload
		},
		fetchCurrentCountryCoords(state, action) {
			console.log(action.payload.data[0].lat)
			state.response = {
				lat: action.payload.data[0].lat,
				lon: action.payload.data[0].lon
			}
		}
	}
})

export default currentCountrySlice.reducer
