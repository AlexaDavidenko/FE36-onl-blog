import {apiUrl} from '../../settings/settings';

export async function loadPost(id: string) {
    const response = await fetch(`${apiUrl}/post/${id}`);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}