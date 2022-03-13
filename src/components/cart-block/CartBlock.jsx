import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './CartBlock.css';
import { ImCart } from 'react-icons/im';
import { ItemsInCart } from '../items-in-cart/ItemsInCart';
import { CartMenu } from '../cart-menu/CartMenu';
import { callcTotalPrice } from '../utils';
import { Link, useNavigate } from 'react-router-dom';


export const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = callcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('./order');
    }, [navigate]);

    return (
        <div className='cart-block'>

            <ItemsInCart quantity={items.length} />
            <ImCart size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            <Link to={'/order'} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
                {totalPrice > 0 ? <span className='cart-block__total-price'> {totalPrice}  դր.</span> : null}
                {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
            </Link>
        </div>
    )
}

