import React, { useEffect } from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import CardDetail from './components/pages/details/cardDetail';
import MagicCards from './components/pages/home/homePage';
import Filter from './components/filter/filter';
import getCards from './components/data-api/magicCards-api';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <div className="App">
      <h1>React Capstone</h1>
      <BrowserRouter>
        <Header />
        <Filter />
        <Router>
          <Route path="/" element={<MagicCards />} />
          <Route path="/details" element={<CardDetail />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
