import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = ({ addresses }) => {
	return (
		<footer className="bg-dark text-white p-4 mt-5 text-center">
			<ul className="list-unstyled">
				{addresses.map((address, index) => (
					<li key={index}>{address}</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
