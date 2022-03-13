import React from 'react';
import { useSelector } from 'react-redux';
import { callcTotalPrice } from '../../components/utils';
import './OrderPage.css';
import { OrderItem } from '../../components/order-item/OrderItem';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1>Karzinat datark e</h1>
    }
  return (
    <div className='OrderPage'>
        <div className="order-page">
            <div className="order-page__left">
                { items.map(game => <OrderItem game={game} key={Math.random()} />) }
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>{items.length} gumary productner {callcTotalPrice(items)} դր.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

