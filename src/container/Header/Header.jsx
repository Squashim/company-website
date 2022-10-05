import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<div className='app__header' id='home'>
			<div className='app__header-bg'></div>
			<div className='app__header-info'>
				<p>Die Besten</p>
				<h1>
					<span style={{ color: "#008C45" }}>Italieni</span>
					<span>sche Spezi</span>
					<span style={{ color: "#CD212A" }}>alitäten</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
