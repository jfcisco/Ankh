import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import { getAnime } from './Services/AnimeService';

import AnimeList from './Components/AnimeList';
import Player from './Components/Player';
import './App.css';

const App = function() {
  const message = 'Welcome to Ankh!'; 
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    setAnimes(getAnime());
  }, []);

  
  
  return (
    <div className="container">
      <h1>{message}</h1>
      
      <AnimeList animes={animes} />
      <Player />
    </div>
  );
}

export default hot(module)(App);
