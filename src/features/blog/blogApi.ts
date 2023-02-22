import {IPostsParams} from './IPostParams';
import {apiUrl} from '../../settings/settings';


export async function fetchPost(id: number) {
    const response = await fetch('https://endpoint/' + id);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function fetchPosts({currentPage, filterStatus, sort, limit = 12}: IPostsParams) {

    const urlParams: Record<string, string> = {
        page: `${currentPage}`,
        filter: `${filterStatus}`,
        limit: `${limit}`,
        sortBy: 'title',
        order: `${sort}`
    };

    const searchParams = new URLSearchParams(urlParams).toString();

    const response = await fetch(`${apiUrl}/post?${searchParams}`);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}
export async function searchPosts({currentPage, search, limit = 12}: IPostsParams) {

    const urlParams: Record<string, string> = {
        page: `${currentPage}`,
        limit: `${limit}`,
        search: `${search}`,
    };

    const searchParams = new URLSearchParams(urlParams).toString();

    const response = await fetch(`${apiUrl}/post?${searchParams}`);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}