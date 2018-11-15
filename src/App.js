import CartPage from './CartPage.js';
import ItemPage from './ItemPage.js';
import {itemsForSale} from './static-data.js';
import Nav from './Nav.js';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item) => {
   this.setState({
      cart: [...this.state.cart, item.id]
   });
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  }

  renderCart() {
    // Count how many of each item is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {} );

    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      var item = itemsForSale.find(item =>
        item.id === parseInt(itemId, 10)
      );

      // Create a new "item" and add the "count" property
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}
      />
    );
  }

  renderContent() {
    switch(this.state.activeTab) {
      default:
      case 0:
        return (
          <ItemPage
            items={itemsForSale}
            onAddToCart={this.handleAddToCart} />
        );
      case 1: return this.renderCart();
    }
  }

  render() {
    let {activeTab} = this.state;
    return (
   	<div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <div> 
         {this.state.cart.length} items
        </div>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}


export default App;
