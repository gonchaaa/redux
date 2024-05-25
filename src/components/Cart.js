// src/components/Cart.js
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import '../styles.css';

class Cart extends PureComponent {
  getTotal() {
    return this.props.cartGoods.reduce((acc, item) => acc + item.price, 0);
  }

  render() {
    return (
      <div className="cart">
        <h2 className="cart__title">Shopping Cart</h2>
        {this.props.cartGoods.length ? (
          <ul className="cart__list">
            {this.props.cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__note">Nothing in the cart now</p>
        )}
        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartGoods: state.cart,
});

export default connect(mapStateToProps)(Cart);
