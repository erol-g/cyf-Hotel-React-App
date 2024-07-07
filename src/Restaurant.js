import React from "react";
import Order from "./Order";

const Restaurant = () => {
	return (
		<div className="container mt-4 ">
			<h3 className="text-center">Restaurant Orders</h3>
			<ul className="list-group border border-primary">
				<Order orderType="Pizzas" />
				<Order orderType="Salads" />
				<Order orderType="Chocolate cake" />
			</ul>
		</div>
	);
};

export default Restaurant;
