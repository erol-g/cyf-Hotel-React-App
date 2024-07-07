// src/Order.js
import React, { useState } from "react";
import RestaurantButtonAdd from "./RestaurantButtonAdd";
import RestaurantButtonRemove from "./RestaurantButtonRemove";

const Order = ({ orderType }) => {
	const [orders, setOrders] = useState(0);

	const orderOneAdd = () => {
		setOrders(orders + 1);
	};
	const orderOneRemove = () => {
		setOrders(orders - 1);
	};
	return (
		<div className="m-1 text">
			<ul className="list-unstyled">
				<li>
					{orderType}: {orders}
					<RestaurantButtonAdd orderOneAdd={orderOneAdd} />
					<RestaurantButtonRemove orderOneRemove={orderOneRemove} />
				</li>
			</ul>
		</div>
	);
};

export default Order;
