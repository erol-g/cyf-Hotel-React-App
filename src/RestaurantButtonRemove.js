// src/RestaurantButtonRemove.js
import React from "react";

const RestaurantButtonRemove = ({ orderOneRemove }) => {
	return (
		<button onClick={orderOneRemove} className="btn btn-success btn-sm m-1">
			Remove
		</button>
	);
};

export default RestaurantButtonRemove;
