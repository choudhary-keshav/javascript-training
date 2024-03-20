import React from 'react';
import { Week4Wrapper } from './styles';
import WeatherDisplay from './WeatherDisplay';
import { NavLink, useParams } from 'react-router-dom';
import TicTacToe from './TicTacToe';

const Week4 = () => {
  const { pageId } = useParams();
  return (
    <Week4Wrapper>
      <NavLink to='1'>
        <button className='buttons'>Weather</button>
      </NavLink>
      <NavLink to='2'>
        <button className='buttons'>Tic-Tac-Toe</button>
      </NavLink>
      {pageId === '1' ? <WeatherDisplay /> : pageId === '2' ? <TicTacToe /> : null}
    </Week4Wrapper>
  );
};

export default Week4;
