export const API_BASE = (process.env.NODE_ENV == "production") ? "http://192.168.0.101" : "http://192.168.0.100:5000";

export const API_ENDPOINTS = {
    animeService: "/api/Anime",
    playerService: "/api/Anime/player"
}

