import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<div className='app__header' id='home'>
			<div className='app__header-bg'></div>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className='app__header-info'>
				<p>Die Besten</p>
				<h1>
					<span style={{ color: "#008C45" }}>Italieni</span>
					<span>sche Spezi</span>
					<span style={{ color: "#CD212A" }}>alitäten</span>
				</h1>
			</motion.div>
		</div>
	);
};

export default Header;
