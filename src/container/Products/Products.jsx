import React from "react";
import "./Products.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Products = () => {
	return (
		<div className='app__products' id='products'>
			<div className='column'>
				<h2>Bei uns finden Sie die frischesten Produkte</h2>
				<div className='products-container'>
					<div className='product-wrapper'>
						<h3>Pasta</h3>
						<div className='product'>
							<img src={images.pasta} alt='pasta' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Mehr sehen</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Fleischprodukte</h3>
						<div className='product'>
							<img src={images.salami} alt='salami' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Mehr sehen</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Käse</h3>
						<div className='product'>
							<img src={images.cheese} alt='cheese' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Mehr sehen</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='product-wrapper'>
						<h3>Oliven</h3>
						<div className='product'>
							<img src={images.olives} alt='olives' />
							<div className='product-overlay'></div>
							<div className='product-details'>
								<Link to='/products'>
									<button>Mehr sehen</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='column dark'>
				<h2>Süßigkeiten zum Nachtisch</h2>
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
									<button>Mehr sehen</button>
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
									<button>Mehr sehen</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='span-2'>
						<h3>Gelato</h3>
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
							<button>Mehr sehen</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
