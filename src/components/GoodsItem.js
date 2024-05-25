// src/components/GoodsItem.js
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../counter/cardSlice';
import '../styles.css';

class GoodsItem extends PureComponent {
  handleAddToCart = () => {
    const { title, description, price, id, dispatch } = this.props;
    dispatch(addItem({ title, description, price, id }));
  };

  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price * 1.2}.00$</span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={this.handleAddToCart}>Add to cart</button>
      </div>
    );
  }
}

export default connect()(GoodsItem);
