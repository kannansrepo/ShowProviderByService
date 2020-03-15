import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './component/Home';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;