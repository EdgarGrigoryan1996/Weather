import Sun from "../../../assets/img/icons/sun.png"
export default function ThisDay({ weather }) {
	const thisDay = {
		celsius: "36°",
		day: "Сегодна",
		time: "18:15",
		city: "Yerevan"
	}
	return (
		<div className="this-day-wrapper">
			<div className="this-day-block">
				<div className="this-day-info">
					<div className="celsius">{Math.floor(weather.main.temp)}</div>
					<div className="day">{thisDay.day}</div>
					<div className="time">Время: {thisDay.time}</div>
					<div className="city">Страна: {weather.name}</div>
				</div>
				<div className="this-day-icon">
					<img src={Sun} alt="" />
				</div>
			</div>
		</div>
	)
}
