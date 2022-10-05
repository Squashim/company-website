import React, { useState } from "react";
import { useEffect } from "react";
import "./Contact.scss";
import { client } from "../../client";
import moment from "moment";

const Contact = () => {
	const [markets, setMarkets] = useState([]);
	const today = new Date();

	useEffect(() => {
		const query = '*[_type == "markets"][0...4] | order(_createdAt desc)';

		client.fetch(query).then((data) => {
			setMarkets(data);
		});
	}, []);

	return (
		<div className='app__contact' id='contact'>
			<div className='divider'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path
						d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
						className='shape-fill'></path>
				</svg>
			</div>
			<div className='app__contact-container'>
				<div className='contact'>
					<h2>Kontakt</h2>
					<div className='wrapper'>
						<p>Tel 123456789</p>
						<p>email: email@com</p>
						<p>Adres asdawd</p>
						<p>dasdawnda</p>
						<p>owkdoaow</p>
					</div>
				</div>
				<div className='markets'>
					<h2>Aktualne rynki</h2>
					{markets.map((market, index) => (
						<div
							className={
								today > Date.parse(market.date)
									? "market-item finished"
									: "market-item"
							}
							key={index}>
							<h3>{market.place}</h3>
							<div className='market-details'>
								<p className='market-day'>
									{moment(market.date).format("dddd, DD.MM")}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
