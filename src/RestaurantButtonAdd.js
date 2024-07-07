import React from "react";

const RestaurantButtonAdd = ({ orderOneAdd }) => {
	return (
		<button onClick={orderOneAdd} className="btn btn-success btn-sm m-1">
			Add
		</button>
	);
};

export default RestaurantButtonAdd;
