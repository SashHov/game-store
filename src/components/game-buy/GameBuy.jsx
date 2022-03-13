import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import './GameBuy.css';
import {Button} from '../button/Button';

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if( isItemInCart ) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
        
    }

    return (
        <div className='GameBuy'>
            <span className='game-buy__price'>{game.price} դր.</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}  >
                { isItemInCart ? 'Չեղարկել' : 'Ավելացնել զամբյուղում' }   
            </Button>
        </div>
    )
}

