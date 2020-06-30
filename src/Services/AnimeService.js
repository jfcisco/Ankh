import mockAnimeList from './MockList';

export async function getAnime() {
    // Better to not hard code the API endpoint
    const animeList = await fetch("/api/Anime");
    return animeList.json();
}

export async function playAnime(id, episode) {
    const requestUrl = `/api/Anime/${id}`;

    // If episode is specified, include in request
    if (episode !== null) {
        requestUrl += `/${episode}`;
    }

    return await fetch(requestUrl);
}