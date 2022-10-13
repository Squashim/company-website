import React, { useEffect, useState } from "react";
import "./Markets.scss";
import { client } from "../client";
import moment from "moment";
import "moment/locale/de";

const Markets = () => {
	const [markets, setMarkets] = useState([]);
	const today = new Date();
	today.setDate(today.getDate() - 1);
	useEffect(() => {
		const query = '*[_type == "markets"] | order(_updatedAt asc)';

		client.fetch(query).then((data) => {
			setMarkets(data);
		});
	}, []);
	return (
		<main className='main-markets'>
			<section className='markets-container'>
				<h1>Aktuelle Märkte</h1>

				{markets.map((market, index) => (
					<div
						className={
							Date.parse(today) > Date.parse(market.date)
								? "market-item finished"
								: "market-item"
						}
						key={index}>
						<h3>{market.place}</h3>
						<div className='market-details'>
							<p className='market-day'>
								{moment(market.date).locale("de").format("dddd, DD.MM")}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default Markets;
