import React from 'react';
import './AnimeList.css';

export default function(props) {
    const animeList = props.animes.map((anime) => 
    <li 
      key={anime.id}
      className="list-group-item anime-list-item">
        <a
          href="#"
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