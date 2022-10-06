import React from "react";
import "./Products.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Products = () => {
	return (
		<div className='app__products' id='products'>
			<div className='column'>
				<h2>Znajdziesz u nas najświeższe produkty</h2>
				<div className='products-container'>
					<div className='product-wrapper'>
						<h3>Makarony</h3>
						<div className='product'>
							<img src={images.pasta} alt='pasta' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Mięso</h3>
						<div className='product'>
							<img src={images.salami} alt='salami' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Sery</h3>
						<div className='product'>
							<img src={images.cheese} alt='cheese' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Oliwki</h3>
						<div className='product'>
							<img src={images.olives} alt='olives' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='column dark'>
				<h2>Na deser</h2>
				<div className='products-container'>
					<div className='product-wrapper'>
						<h3>Cannoli</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
							voluptates odit velit ad libero expedita?
						</p>
						<div className='product'>
							<img src={images.cannoli} alt='cannoli' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>

					<div className='product-wrapper'>
						<h3>Amaretti</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
							delectus consectetur ab quisquam laudantium cupiditate.
						</p>
						<div className='product'>
							<img src={images.amaretti} alt='amaretti' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Zobacz więcej</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='span-2'>
						<h3>Lody</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
							quam quas mollitia accusantium ipsum.
						</p>
						<div className='product-wrapper'>
							<div className='product'>
								<img src={images.gelato} alt='gelato' />
							</div>
						</div>
						<Link to='/products'>
							<button>Zobacz więcej</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
