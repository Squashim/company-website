import React from "react";
import { Navbar } from "./components";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Markets from "./pages/Markets";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/markets' element={<Markets />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
