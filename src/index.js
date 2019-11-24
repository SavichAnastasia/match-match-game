import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import CardsFieldContainer from './containers/CardsFieldContainer';
import Menu from './components/Menu';
import store from './store';
import WelcomePage from './components/WelcomPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Menu />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/game" component={CardsFieldContainer} />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
