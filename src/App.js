import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import GameDetail from './components/pages/details/gameDetail';
import MmoGames from './components/pages/home/homePage';
import Filter from './components/filter/filter';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Capstone</h1>
      <BrowserRouter>
        <Header />
        <Filter />
        <Routes>
          <Route path="/" element={<MmoGames />} />
          <Route path="/details" element={<GameDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
