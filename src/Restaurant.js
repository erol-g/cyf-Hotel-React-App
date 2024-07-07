import React from "react";
import Order from "./Order";

const Restaurant = () => {
	return (
		<div className="container mt-4 border border-b-secondary p-3  ">
			<h3 className="text-center">Restaurant Orders</h3>
			<ul className="list-group text-center">
				<Order orderType="Pizzas" />
				<Order orderType="Salads" />
				<Order orderType="C.Cake" />
			</ul>
		</div>
	);
};

export default Restaurant;
