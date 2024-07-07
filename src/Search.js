import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
		console.log(searchInput);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		search(searchInput);
		setSearchInput("");
	};

	return (
		<div className="search m-4">
			<div className="page-header">
				<h4 className="text-center">Search Bookings</h4>
			</div>
			<div className="row search-wrapper border border-b-secondary">
				<div className="col m-2 text-center align-content-center justify-content-center">
					<form className="form-group search-box" onSubmit={handleSubmit}>
						<label htmlFor="customerName">Customer name</label>
						<div className="search-row d-flex  ">
							<input
								type="text"
								id="customerName"
								className="form-control"
								placeholder="Customer name"
								value={searchInput}
								onChange={handleSearchInput}
							/>
							<SearchButton />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Search;
