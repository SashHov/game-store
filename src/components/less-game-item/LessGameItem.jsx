import React, { useState } from 'react';
import { GameItem } from '../game-item/GameItem';
import './LessGameItem.css';
import { Button } from '../button/Button';

export const LessGameItem = ({game, GAMES, max = 6}) => {

    const [showMore, setShowMore] = useState(true); 

    if(GAMES.length <= max) {
        return <GameItem />
    }

  return (
    <div className='LessGameItem'>
        {showMore ? `${game}.../` : `${GAMES}`}
        <a className="moreLess" href='#' onClick={(event)=>{
                event.preventDefault();
                setShowMore(!showMore);
            }}>{showMore ? <Button className='btn'>More</Button> : <Button>less</Button>}
        </a>
    </div>
  )
}




/*
const [showLess, setShowLess] = useState(true); 

    if(gameDescription.length <= max) {
        return <span>{gameDescription}</span>;
    }

    return (
        <span>
            {showLess ? `${gameDescription.substring(0, max)} ...` : `${gameDescription}...`}
            <a className="moreLess" href='#' onClick={(event)=>{
                event.preventDefault();
                setShowLess(!showLess);
            }}>{showLess ? <Button className='btn'>More</Button> : <Button>less</Button>}
            </a>
        </span> 
    )
*/

