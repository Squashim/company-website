import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState("home");

	const changeBackground = () => {
		if (window.scrollY >= 66) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	const changeToggle = (active) => {
		setToggle(false);
		setActive(active);
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
				<li>
					<Link
						to='/'
						className={active === "home" ? "active" : ""}
						onClick={() => setActive("home")}>
						Home
					</Link>
					<div />
				</li>
				<li>
					<Link
						to='/products'
						className={active === "products" ? "active" : ""}
						onClick={() => setActive("products")}>
						Products
					</Link>
					<div />
				</li>
				<li>
					<Link
						to='/markets'
						className={active === "markets" ? "active" : ""}
						onClick={() => setActive("markets")}>
						Markets
					</Link>
					<div />
				</li>
				<li>
					<Link
						to='/contact'
						className={active === "contact" ? "active" : ""}
						onClick={() => setActive("contact")}>
						Contact
					</Link>
					<div />
				</li>
			</ul>

			<div className='app__navbar-menu'>
				<AiOutlineMenu onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						initial={{ width: 0 }}
						animate={{
							width: 300,
						}}>
						<AiOutlineClose onClick={() => setToggle(false)} />
						<ul>
							<li>
								<Link
									to='/'
									className={active === "home" ? "active" : ""}
									onClick={() => changeToggle("home")}>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='/products'
									className={active === "products" ? "active" : ""}
									onClick={() => changeToggle("products")}>
									Products
								</Link>
							</li>
							<li>
								<Link
									to='/markets'
									className={active === "markets" ? "active" : ""}
									onClick={() => changeToggle("markets")}>
									Markets
								</Link>
							</li>
							<li>
								<Link
									to='/contact'
									className={active === "contact" ? "active" : ""}
									onClick={() => changeToggle("contact")}>
									Contact
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
