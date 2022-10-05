import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className='app__footer'>
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
			<p>
				&#169; <span style={{ fontWeight: "700" }}>2022 ITAL-MAX</span> Wszelkie
				prawa zastrzeżone
			</p>
		</footer>
	);
};

export default Footer;
