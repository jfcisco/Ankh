import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import { getAnime, playAnime } from './Services/AnimeService';

import AnimeList from './Components/AnimeList';
import Player from './Components/Player/Player';
import './App.css';

const App = function() {
  const message = 'Welcome to Ankh!'; 
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(1);

  // Retrieve all anime initially
  useEffect(() => {
    getAnime()
    .then(response => {
      setIsLoading(false);
      setAnimes(response)
    });
  }, []);

  // Play the right after every change
  useEffect(() => {
    if (currentAnime === null) return;
    playAnime(currentAnime.id, currentEpisode);
  }, [currentEpisode]);

  function playAnimeWithId(animeId) {
    playAnime(animeId)
    .then(response => {
      setCurrentAnime(response);
    });
  }

  function handleEpisodeChange(number) {
    setCurrentEpisode(number);
  }

  function getAnimeDetailsFromId(animeId) {
    for (var i = 0; i < animes.length; i++) {
      if (animes[i].id === animeId) {
        return animes[i];
      }
    }
  }
  
  return (
    <div className="container">
      <h1>{message}</h1>
      <h2>{isLoading ? "Loading..." : ""}</h2>
      
      <AnimeList 
        animes={animes} 
        setCurrentAnime={ playAnimeWithId }/>
      <Player 
        currentAnime={ currentAnime } 
        setCurrentEpisode={ handleEpisodeChange } />
    </div>
  );
}

export default hot(module)(App);
