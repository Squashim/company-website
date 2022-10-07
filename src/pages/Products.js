import React, { useState } from "react";
import "./Products.scss";
import { images } from "../constants";
import { BiShow, BiHide } from "react-icons/bi";

const Products = () => {
	const products = {
		pasta: [
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
			{ name: "pasta", url: images.pasta },
		],
		meat: [
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
			{ name: "salami", url: images.salami },
		],
		cheese: [
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
			{ name: "ser", url: images.cheese },
		],
		oliwki: [
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
			{ name: "oliwki", url: images.olives },
		],
		cannoli: [
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
			{ name: "cannoli", url: images.cannoli },
		],
		amaretti: [
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
			{ name: "amaretti", url: images.amaretti },
		],
		lody: [
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
			{ name: "lody", url: images.gelato },
		],
	};

	const ProductContainer = ({ title, array }) => {
		const [show, setShow] = useState(false);
		return (
			<div className='product-container'>
				<div className='product-heading'>
					<h2>{title}</h2>
					{!show ? (
						<BiHide
							size={20}
							className='showBtn'
							onClick={() => setShow(true)}
						/>
					) : (
						<BiShow
							size={20}
							className='showBtn'
							onClick={() => setShow(false)}
						/>
					)}
				</div>

				<div className={show ? "products-grid" : "products-grid hidden"}>
					{array.map((product, index) => (
						<div key={index}>
							<img src={product.url} alt='pasta' />
							<p>
								{product.name}
								{index + 1}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<main className='main-products'>
			<ProductContainer title='Pasta' array={products.pasta} />
			<ProductContainer title='Fleischprodukte' array={products.meat} />
			<ProductContainer title='Käse' array={products.cheese} />
			<ProductContainer title='Oliven' array={products.oliwki} />
			<ProductContainer title='Cannoli' array={products.cannoli} />
			<ProductContainer title='Amaretti' array={products.amaretti} />
			<ProductContainer title='Gelato' array={products.lody} />
		</main>
	);
};

export default Products;
