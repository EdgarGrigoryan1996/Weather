import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice"
import currentCountrySliceReducer from "./slices/currentCountrySlice"
const rootReducer = combineReducers({
	currentWeatherSliceReducer,
	currentCountrySliceReducer
})
const store = configureStore({
	reducer: rootReducer
})

export default store