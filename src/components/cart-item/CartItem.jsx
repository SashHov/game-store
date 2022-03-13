import React from 'react';
import './CartItem.css';

export const CartItem = ({title, price, id}) => {
  return (
    <div className='CartItem'>
        <span>{title}</span>
        <div className="cart-item__price">
            <span>{price} դր.</span>
        </div>
    </div>
  )
}
