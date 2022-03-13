import React from 'react';
import { GameCover } from '../game-cover/GameCover';
import { GameBuy } from '../game-buy/GameBuy';
import { GameGenre } from '../game-genre/GameGenre';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/reducer';
import './GameItem.css';


export const GameItem = ({ game }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`); 
    }


    return (
        
            <div className='GameItem' onClick={handleClick}>
                <Link to={'/app/' + game.title}><GameCover image={game.image} /></Link>
                <div className='game-item__details'></div>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        
    )
}
