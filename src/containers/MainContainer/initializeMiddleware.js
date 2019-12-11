import { INIT_GAME, setCards } from '../CardsFieldContainer/cardsActions';
import shuffle from '../CardsFieldContainer/shuffleFunc';
import { minions, minionCardShirt } from '../../assets/img/minions/minions';
import { smiles } from '../../assets/img/smiles/smiles';

const initializeMiddleware = (store) => (next) => (action) => {
  if (action.type === INIT_GAME) {
    const { menuReducer: { gameDifficulty, cardsShirt } } = store.getState();
    const cardsImages = cardsShirt === minionCardShirt ? minions : smiles;
    const requiredCards = cardsImages.slice(0, gameDifficulty);
    const cardsArray = shuffle([...requiredCards, ...requiredCards].map((card, index) => ({
      src: card,
      opened: false,
      hidden: false,
      index,
    })));
    store.dispatch(setCards(cardsArray));
  } else {
    next(action);
  }
};

export default initializeMiddleware;
