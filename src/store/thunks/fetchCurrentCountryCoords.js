import { CountryService } from "../../services/countryService"
import { currentCountrySlice } from "../slices/currentCountrySlice"


export const fetchCurrentCountry = (payload) => async (dispatch) => {
	try {
		const res = await CountryService.getCurrentCountry(payload)
		if (res.status === 200) {
			dispatch(currentCountrySlice.actions.fetchCurrentCountryCoords(res))
			console.log(res.data)
		}
	} catch (error) {
		console.log(error)
	}

}