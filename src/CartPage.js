import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
	let totalPrice = 0;
	items.map(item => {
		let itemPrice = item.count*item.price;
		totalPrice += itemPrice;
	})
	
	return(
		<div>
			{items.length > 0 ?
				<ul className="CartPage-items">
					{items.map(item =>
						<li key={item.id} className="CartPage-item">
							<Item item={item}>
								<div className="CartItem-controls">
									<button
										className="CartItem-removeOne"
										onClick={() => onRemoveOne(item)}>&ndash;</button>
									<span className="CartItem-count">{item.count}</span>
									<button
										className="CartItem-addOne"
										onClick={() => onAddOne(item)}>+</button>
								</div>
							</Item>
						</li>
					)}
				</ul>
				:
				<div className="CartPage-emptyMessage">
					<div className="CartPage-emptyMessageTop">
						Your cart is empty.
					</div>
					<div>Add some stuff!</div>
				</div>
			}
			<div className="CartPage-totalPrice">Total: ${totalPrice}</div>
		</div>
	);
}

CartPage.propTypes = {
	items: PropTypes.array.isRequired,
	onAddOne: PropTypes.func.isRequired,
	onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;