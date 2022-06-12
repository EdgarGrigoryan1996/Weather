import Day from "./Day"
import "./MoreDays.css"
import cloudy from "../../assets/img/icons/more-days-icons/cloudy.png"
export default function MoreDays() {
	const moreDays = [
		{
			day: "Сегодня",
			date: "28 авг",
			icon: cloudy,
			tempDay: "+18°",
			tempNight: "+15°",
			nightInfo: "Облачно"
		},
		{
			day: "Завтра",
			date: "29 авг",
			icon: cloudy,
			tempDay: "+18°",
			tempNight: "+15°",
			nightInfo: "Облачно"
		},
		{
			day: "Пн",
			date: "30 авг",
			icon: cloudy,
			tempDay: "+18°",
			tempNight: "+15°",
			nightInfo: "Облачно"
		},
		{
			day: "Вт",
			date: "31 авг",
			icon: cloudy,
			tempDay: "+23°",
			tempNight: "+18°",
			nightInfo: "Облачно"
		},
		{
			day: "Ср",
			date: "28 авг",
			icon: cloudy,
			tempDay: "+23°",
			tempNight: "+20°",
			nightInfo: "Облачно"
		},
		{
			day: "Чт",
			date: "28 авг",
			icon: cloudy,
			tempDay: "+25°",
			tempNight: "+22°",
			nightInfo: "Облачно"
		},
		{
			day: "Пт",
			date: "28 авг",
			icon: cloudy,
			tempDay: "+28°",
			tempNight: "+22°",
			nightInfo: "Облачно"
		}

	]
	return (
		<div className="days">
			<div className="more-days-wrapper">
				{moreDays.map((day) => {
					return (
						<Day day={day} key={Math.random()} />
					)
				})}
			</div>
		</div>

	)
}
