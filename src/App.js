import React, { useEffect } from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import CardDetail from './components/pages/details/CardDetail';
import MagicCards from './components/pages/home/HomePage';
import getCards from './components/data-api/MagicCards-api';

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
        <Router>
          <Route path="/detail/:id" element={<CardDetail />} />
          <Route path="/" element={<MagicCards />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
