import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";

function App() {
	const footerInfo = [
		"123 Cyf Street, London, CYF1 3C",
		"hello@cyfHotel.com",
		"0123 456789",
	];
	return (
		<div className="App">
			<Heading />
			<TouristInfoCards />
			<Bookings />
			<Restaurant />
			<Footer addresses={footerInfo} />
		</div>
	);
}

export default App;
