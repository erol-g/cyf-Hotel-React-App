import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Heading = () => {
	return (
		<header className="bg-dark text-white p-4 text-center">
			<img
				src="https://www.shutterstock.com/image-vector/cyf-create-your-future-acronym-260nw-2046641423.jpg"
				className="mr-3"
				alt="logo"
				style={{ width: "6em", height: "6em", margin:"10px"}}
			/>
			<h1 className="d-inline-block">CYF Hotel</h1>
		</header>
	);
};

export default Heading;
