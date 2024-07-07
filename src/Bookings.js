import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Bookings = () => {
	const [bookings, setBookings] = useState(FakeBookings);

	const search = (searchVal) => {
		const filteredBookings = FakeBookings.filter(
			(booking) =>
				booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
				booking.surname.toLowerCase().includes(searchVal.toLowerCase()),
		);
		setBookings(filteredBookings);
	};

	return (
		<div className="App-content">
			<div className="container">
				<Search search={search} />
				<SearchResults bookings={bookings} />
			</div>
		</div>
	);
};

export default Bookings;

// import React, { useState, useEffect } from "react";
// import Search from "./Search";
// import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

// const Bookings = () => {
// 	const [bookings, setBookings] = useState(FakeBookings);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		fetch("/data/fakeBookings.json")
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw new Error("Network response was not ok");
// 				}
// 				return response.json();
// 			})
// 			.then((data) => {
// 				setBookings(data);
// 				setLoading(false);
// 			})
// 			.catch((error) => {
// 				setError(error);
// 				setLoading(false);
// 			});
// 	}, []);

// 	const search = (searchVal) => {
// 		const filteredBookings = FakeBookings.filter(
// 			(booking) =>
// 				booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
// 				booking.surname.toLowerCase().includes(searchVal.toLowerCase()),
// 		);
// 		setBookings(filteredBookings);
// 	};

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		return <div>Error: {error.message}</div>;
// 	}

// 	return (
// 		<div className="App-content">
// 			<div className="container">
// 				<Search search={search} />
// 				<SearchResults bookings={bookings} />
// 			</div>
// 		</div>
// 	);
// };

// export default Bookings;
