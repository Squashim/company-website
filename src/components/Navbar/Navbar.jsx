import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [toggle, setToggle] = useState(false);

	const CustomLink = ({ to, children, ...props }) => {
		const resolvedPath = useResolvedPath(to);
		const isActive = useMatch({ path: resolvedPath.pathname, end: true });

		return (
			<li>
				<Link to={to} {...props} className={isActive ? "active" : ""}>
					{children}
					<div />
				</Link>
			</li>
		);
	};

	const changeBackground = () => {
		if (window.scrollY >= 66) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {
		changeBackground();
		window.addEventListener("scroll", changeBackground);
	});
	return (
		<nav className={navbar ? "app__navbar active" : "app__navbar"}>
			<div className='app__navbar-logo'>
				<img src={images.logo} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				<CustomLink to='/'>Heim</CustomLink>
				<CustomLink to='/products'>Produkte</CustomLink>
				<CustomLink to='/markets'>Märkte</CustomLink>
				<CustomLink to='/contact'>Kontakt</CustomLink>
			</ul>

			<div className='app__navbar-menu'>
				<AiOutlineMenu onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						className='container'
						initial={{ width: 0 }}
						animate={{
							width: 300,
						}}>
						<AiOutlineClose onClick={() => setToggle(false)} />
						<ul>
							<CustomLink onClick={() => setToggle(false)} to='/'>
								Heim
							</CustomLink>
							<CustomLink onClick={() => setToggle(false)} to='/products'>
								Produkte
							</CustomLink>
							<CustomLink onClick={() => setToggle(false)} to='/markets'>
								Märkte
							</CustomLink>
							<CustomLink onClick={() => setToggle(false)} to='/contact'>
								Kontakt
							</CustomLink>
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
