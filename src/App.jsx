import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import MemoryGameContainer from './containers/MemoryGameContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MemoryGameContainer />
      </div>
    </Provider>
  );
}

export default App;
