import React from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchResults = ({ bookings }) => {
	const calculateNights = (checkInDate, checkOutDate) => {
		const checkIn = moment(checkInDate);
		const checkOut = moment(checkOutDate);
		return checkOut.diff(checkIn, "days");
	};

	return (
		<div className="container mt-4">
			<h3 className="text-center mb-4">Booking Search Results</h3>
			<table className="table table-striped table-hover text-center">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Title</th>
						<th scope="col">First Name</th>
						<th scope="col">Surname</th>
						<th scope="col">Email</th>
						<th scope="col">Room ID</th>
						<th scope="col">Check In Date</th>
						<th scope="col">Check Out Date</th>
						<th scope="col">Nights</th>
					</tr>
				</thead>
				<tbody>
					{bookings.map((booking) => (
						<tr key={booking.id} className="align-middle">
							<td>{booking.title}</td>
							<td>{booking.firstName}</td>
							<td>{booking.surname}</td>
							<td>{booking.email}</td>
							<td>{booking.roomId}</td>
							<td>{moment(booking.checkInDate).format("YYYY-MM-DD")}</td>
							<td>{moment(booking.checkOutDate).format("YYYY-MM-DD")}</td>
							<td>
								{calculateNights(booking.checkInDate, booking.checkOutDate)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SearchResults;
