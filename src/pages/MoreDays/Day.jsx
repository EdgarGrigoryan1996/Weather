export default function Day({ day }) {
	return (
		<div className="day-block">
			<div className="day-block-wrapper">
				<div className="more-day">{day.day}</div>
				<div className="date">{day.date}</div>
				<div className="icon"><img src={day.icon} alt="" /></div>
				<div className="temp-day">{day.tempDay}</div>
				<div className="temp-night">{day.tempNight}</div>
				<div className="night-info">{day.nightInfo}</div>
			</div>
		</div>
	)
}
