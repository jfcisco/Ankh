import React from 'react';
import './AnimeList.css';

export default function(props) {
  function handleAnimeSelection(animeId) {
    props.setCurrentAnime(animeId);
  }

    const animeList = props.animes.map((anime) => 
    <li 
      key={anime.id}
      className="list-group-item anime-list-item">
        <a
          href="#"
          data-anime-id={anime.id}
          onClick={() => handleAnimeSelection(anime.id)}
          >
          {anime.name}
        </a>
    </li>);

    return (
        <ul className="list-group">
            { animeList }
        </ul>
    );
}