import React from 'react';

// generally not good to create a function in the onClick method each time
// not because it's expensive, but because passing a new funciton down
// to a pure component every time it renders means that it will always
// see "new" props, and therefore always re-render (needlessly).

const Nav = ({ activeTab, onTabChange, itemCount }) => (
	<>
		<nav className="App-nav">
			<ul>
				<li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
					<a onClick={() => onTabChange(0)}>Items</a>
				</li>
				<li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
					<a onClick={() => onTabChange(1)}>Cart</a>
				</li>
			</ul>
			<div className="App-nav-cart">
				<i
					className="fas fa-shopping-cart CartIcon"
				/>
				{itemCount}
			</div>
		</nav>
	</>
);

export default Nav;

