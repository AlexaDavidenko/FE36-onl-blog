import {apiUrl} from '../../settings/settings';

export async function loadPostsSimilar(limit = 3) {
    const response = await fetch(`${apiUrl}/post?page=1&limit=${limit}`);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}