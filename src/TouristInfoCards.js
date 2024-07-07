import React from "react";

const cards = [
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsq2wVC0IAUrYS00XLuqZh_OjC-kHsgBdcw&usqp=CAU",
		city: "Glasgow",
		link: "https://peoplemakeglasgow.com",
	},
	{
		img: "https://media.istockphoto.com/id/1492439212/photo/drone-view-of-media-city-salford-quays-at-night-manchester.webp?b=1&s=170667a&w=0&k=20&c=EUDJtfvnFMDuUAdBnAMSvIVQ9Dw4rKVip8Ox-Dvk-x4=",
		city: "Manchester",
		link: "https://visitmanchester.com",
	},
	{
		img: "https://bd.visa.com/dam/VCOM/regional/ap/images/travel-with-visa/london/marquee-travel-london-800x450.jpg",
		city: "London",
		link: "https://visitlondon.com",
	},
];

const TouristInfoCards = () => {
	return (
		<div className="d-flex justify-content-around my-4">
			{cards.map((card, index) => (
				<div
					key={index}
					className="card text-center"
					style={{ width: "15rem" }}
				>
					<img src={card.img} className="card-img-top p-2" alt={card.city} />
					<div className="card-body">
						<h5 className="card-title">{card.city}</h5>
						<a href={card.link} className="btn btn-primary">
							Go {card.city}
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default TouristInfoCards;
