import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCardsShirt, setGameDifficulty, setVisibleItem } from './menuActions';
import { clearTime } from '../TimerContainer/timerActions';
import styles from './styles.module.css';
import MenuItem from '../../components/MenuItem';
import {
  GameDifficultyPopup, CardsShirtPopup, RulesPopup, Top10Popup,
} from '../../components/Popup';
import {
  gameDifficulty, rules, cardsShirt, top, gameMenu,
} from './manuItemsNames';

export default function Menu() {
  const dispatch = useDispatch();

  const visibleItemName = useSelector((state) => state.menuReducer.visibleItem);

  const showPopup = (e) => {
    const eventElemName = e.currentTarget.dataset.name;
    if (eventElemName === visibleItemName) {
      dispatch(setVisibleItem(null));
    } else {
      dispatch(setVisibleItem(e.currentTarget.dataset.name));
    }
  };

  const selectGameDifficulty = (e) => {
    dispatch(setGameDifficulty(e.target.value));
    dispatch(clearTime());
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest(`.${gameMenu}`)) {
      dispatch(setVisibleItem(null));
    }
  });

  return (
    <div className={`${styles.menu} ${gameMenu}`}>
      <MenuItem name={top} onClick={showPopup}>
        {visibleItemName === top ? <Top10Popup name={top} /> : '' }
      </MenuItem>
      <MenuItem name={gameDifficulty} onClick={showPopup}>
        {visibleItemName === gameDifficulty ? <GameDifficultyPopup onChange={selectGameDifficulty} name={gameDifficulty} /> : '' }
      </MenuItem>
      <MenuItem name={cardsShirt} onClick={showPopup}>
        {visibleItemName === cardsShirt ? <CardsShirtPopup name={cardsShirt} /> : '' }
      </MenuItem>
      <MenuItem name={rules} onClick={showPopup}>
        {visibleItemName === rules ? <RulesPopup name={rules} /> : '' }
      </MenuItem>
    </div>
  );
}
