import React from 'react';
import { Button } from '../button/Button';
import { CartItem } from '../cart-item/CartItem';
import { callcTotalPrice } from '../utils';
import './CartMenu.css';

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='CartMenu'>
            <div className="cart-menu__games-list">
                {
                    items.length > 0 ? items.map((game) => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Զամբյուղը դատարկ է'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className="cart-menu__total-price">
                            <span>Ընդհանուր</span>
                            <span> {callcTotalPrice(items)} դր</span>
                        </div>
                        <Button type='primary' size='m' onClick={onClick}>
                            Վճարել
                        </Button>
                    </div>

                    : null
            }
        </div>
    )
}
