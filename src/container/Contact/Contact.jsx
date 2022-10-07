import React, { useState } from "react";
import { useEffect } from "react";
import "./Contact.scss";
import { client } from "../../client";
import moment from "moment";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "moment/locale/de";

const Contact = () => {
	const [markets, setMarkets] = useState([]);
	const today = new Date();
	today.setDate(today.getDate() - 1);

	useEffect(() => {
		const query = '*[_type == "markets"][0...4] | order(_createdAt desc)';

		client.fetch(query).then((data) => {
			setMarkets(data);
		});
	}, []);

	return (
		<div className='app__contact' id='contact'>
			<div className='app__contact-container'>
				<div className='contact'>
					<h2>Kontakt</h2>
					<div className='wrapper'>
						<p>Telefonnummer: 123 456 789</p>
						<p>E-mail: ital@max.de</p>
					</div>
					<Link to='/contact'>
						<button>Mehr sehen</button>
					</Link>
				</div>
				<div className='shop'>
					<h2>Unser Geschäft</h2>
					<Link to='/contact'>
						<img src={images.shop} alt='shop' />
					</Link>
				</div>
				<div className='markets'>
					<h2>Aktuelle Märkte</h2>
					{markets.map((market, index) => (
						<Link to='/markets' key={index}>
							<div
								className={
									Date.parse(today) > Date.parse(market.date)
										? "market-item finished"
										: "market-item"
								}>
								<h3>{market.place}</h3>
								<div className='market-details'>
									<p className='market-day'>
										{moment(market.date).locale("de").format("dddd, DD.MM")}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
