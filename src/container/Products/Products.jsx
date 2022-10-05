import React from "react";
import "./Products.scss";
import { images } from "../../constants";

const Products = () => {
	return (
		<div className='app__products' id='products'>
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
			<div className='column'>
				<h2>Znajdziesz u nas najświeższe produkty</h2>
				<div className='products-container'>
					<div className='product-wrapper'>
						<h3>Makarony</h3>
						<div className='product'>
							<img src={images.pasta} alt='pasta' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<button>Zobacz więcej</button>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Mięso</h3>
						<div className='product'>
							<img src={images.salami} alt='salami' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<button>Zobacz więcej</button>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Sery</h3>
						<div className='product'>
							<img src={images.cheese} alt='cheese' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<button>Zobacz więcej</button>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Oliwki</h3>
						<div className='product'>
							<img src={images.olives} alt='olives' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<button>Zobacz więcej</button>
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
								<button>Zobacz więcej</button>
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
								<button>Zobacz więcej</button>
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
						<button>Zobacz więcej</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
