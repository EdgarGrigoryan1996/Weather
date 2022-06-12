import Header from "./shared/Header";
import "./app.css"
import Home from "./pages/Home/Home";
import MoreDays from "./pages/MoreDays/MoreDays";
function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Home />
				<MoreDays />
			</div>
		</div>
	);
}

export default App;
