import React, { useEffect } from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import CardDetail from './components/pages/details/cardDetail';
import MagicCards from './components/pages/home/homePage';
import getCards from './components/data-api/magicCards-api';

import './fonts/magic/magic.TTF';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Collection of Cards Magic The Gatering</h1>
        <Router>
          <Route path="/detail/:id" element={<CardDetail />} />
          <Route path="/" element={<MagicCards />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
