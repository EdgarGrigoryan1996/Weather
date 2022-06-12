import cloud from "../../../assets/img/cloud/cloud.png"
import temp from "../../../assets/img/icons/dayInfo-icons/temperature.png"
import drop from "../../../assets/img/icons/dayInfo-icons/drop.png"
import precipitation from "../../../assets/img/icons/dayInfo-icons/precipitation.png"
import wind from "../../../assets/img/icons/dayInfo-icons/wind.png"
import { useCustomSelector } from "../../../hooks/store"
export default function ThisDayInfo() {
	const weather = useCustomSelector((state) => state.currentWeatherSliceReducer.weather.main.temp)
	const thisDayInfo = [
		{
			icon: temp,
			title: "Температура",
			info: Math.floor(weather) + " - ощущается как 32°"
		},
		{
			icon: drop,
			title: "Давление",
			info: "765 мм ртутного столба - нормальное"
		},
		{
			icon: precipitation,
			title: "Осадки",
			info: "Без осадков°"
		},
		{
			icon: wind,
			title: "Ветер",
			info: "3 м/с юго-запад - легкий-ветер"
		}

	]
	console.log("thisi is weather" + weather)
	return (
		<div className="this-day-info-block">
			<img className="cloud" src={cloud} alt="" />
			<div className="this-day-info-wrapper">
				{thisDayInfo.map((item) => {
					return (
						<div className="item" key={Math.random()}>
							<div className="icon-block"><img src={item.icon} alt="" /></div>
							<div className="item-title">{item.title}</div>
							<div className="item-info">{item.info}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
