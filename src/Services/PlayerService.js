import { API_BASE, API_ENDPOINTS } from './Endpoints';

export async function play() {
    const requestUrl = API_BASE + API_ENDPOINTS.playerService;

    return await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify("PLAY")
    });
}

export async function toggleFullScreen() {
    const requestUrl = API_BASE + API_ENDPOINTS.playerService;

    return await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify("FULLSCREEN")
    });
}