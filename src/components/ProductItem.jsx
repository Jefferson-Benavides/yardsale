import React from 'react';
import '@styles/ProductItem.scss';
import manzana from '@products/01-apple.svg';
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src={manzana} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Manzana</p>
				</div>
				<figure>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
