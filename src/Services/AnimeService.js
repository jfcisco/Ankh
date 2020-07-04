import { API_BASE, API_ENDPOINTS } from './Endpoints';

export async function getAnime() {
    const requestUrl = API_BASE + API_ENDPOINTS.animeService;
    const animeList = await fetch(requestUrl, {
        mode: "cors"
    });
    return animeList.json();
}

export async function playAnime(id, episode = null) {
    let requestUrl = API_BASE + API_ENDPOINTS.animeService + `/${id}`;

    // If episode is specified, include in request
    if (episode !== null) {
        requestUrl += `/${episode}`;
    }
    
    const playingAnime = await fetch(requestUrl,
        {
            mode: "cors"
        });
    return playingAnime.json();
}