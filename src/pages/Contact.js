import React from "react";
import "./Contact.scss";
import { images } from "../constants";

const Contact = () => {
	return (
		<main className='main-contact'>
			<div className='contact-container'>
				<div className='contact-details'>
					<div className='contact-adress'>
						<h1>Adresse</h1>
						<p>Ital-Max AG</p>
						<p>Italienische Spezialitäten</p>
						<p>Weinbergstrasse 73</p>
						<p>8006 Zürich</p>
						<p>Switzerland</p>
					</div>

					<div className='shop'>
						<div>
							<h1>Shop</h1>
							<p>Dorfstrasse 165</p>
							<p>3818 Grindelwald</p>
							<p>Switzerland</p>
						</div>

						<img src={images.shop} alt='shop' />
					</div>
					<div className='contact-info'>
						<h1>Kontakt</h1>
						<p>Telefonnummer: 123 456 789</p>
						<p>E-mail: ital@max.de</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Contact;
