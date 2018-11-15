import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item({ item, children }) {
	var img_src = item.image_source;

	return(
		<div className="Item">
			<div className="Item-left">
				<img
					className="Item-image"
					src={require(`./images/${img_src}.jpg`)}
				/>
				<div className="Item-title">{item.name}</div>
				<div className="Item-description">{item.description}</div>
			</div>
			<div className="Item-right">
				<div className="Item-price">${item.price}
				</div>
				{children}
			</div>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	children: PropTypes.node
}


export default Item;