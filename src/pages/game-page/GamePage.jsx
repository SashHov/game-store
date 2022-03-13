import React from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/game-buy/GameBuy';
import { GameCover } from '../../components/game-cover/GameCover';
import { GameGenre } from '../../components/game-genre/GameGenre';
import './GamePage.css';
import {LessDescription} from '../../components/less-description/LessDescription'

export const GamePage = () => {
  // henc es ej@ refresh em anum koruma vonc dzem
  

  const game = useSelector(state => state.game.currentGame);

  if (!game) return null;

  return (
    <div className='GamePage'>
      <h1 className="game-page__title"> {game.title} </h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width='90%'
            height='400px'
            src={game.video}
            title="Youtube Video Player"
            frameBorder='none'>
            
          </iframe>

        </div>

        <div className='game-page__right'>
          <GameCover image={game.image} />
          <LessDescription gameDescription={game.description} /> 
          <p className='secondary-text'>populyarnie metki es producti</p>
          {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>

      </div>
    </div>
  )
}

