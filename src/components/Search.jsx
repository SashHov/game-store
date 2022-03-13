import React, { useState } from 'react';
import { GameItem } from './game-item/GameItem';

export const Search = ({searchHanlder}) => {

    const onChangeSearch = (value) => {
        searchHanlder(value);
    }

    // console.log(gameGenres);

  return (
    <div className='Search'>
        <input type="text" placeholder='Search Here...' onChange={(e) => onChangeSearch(e.target.value)}/>
    </div>
  )
}
