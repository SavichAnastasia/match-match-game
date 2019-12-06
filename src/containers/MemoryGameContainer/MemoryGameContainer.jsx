import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import MainContainer from '../MainContainer';
import Menu from '../Menu';
import WelcomePage from '../../components/WelcomPage';
import { setPlayer } from './playFormActions';
import PlayerForm from '../../components/PlayerForm';

function MemoryGameContainer() {
  const player = useSelector((state) => state.playFormReducer.player);
  const dispatch = useDispatch();

  const savePlayer = (e) => {
    e.preventDefault();
    const inputs = [...e.currentTarget.elements].slice(0, 3);
    inputs.forEach((item) => {
      if (!item.value) {
        item.style.border = '1px solid red';
      } else {
        item.style.border = '1px solid grey';
      }
    });
    const [firstName, lastName, email] = inputs.map((item) => item.value);
    if (firstName && lastName && email) {
      const memoryGamePlayer = {
        firstName,
        lastName,
        email,
      };
      dispatch(setPlayer(memoryGamePlayer));
      localStorage.setItem('memoryGamePlayer', JSON.stringify(memoryGamePlayer));
    }
  };

  return (
    <>
      <PlayerForm onSubmit={savePlayer} player={player} />
      <Menu />
      <BrowserRouter>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/game" component={MainContainer} />
      </BrowserRouter>
    </>
  );
}

export default React.memo(MemoryGameContainer);
