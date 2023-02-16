import {IPostsParams} from './IPostParams';

const apiUrl = 'https://63eb7f8ff1a969340db9491d.mockapi.io/api/';
export async function fetchPost(id: number) {
    const response = await fetch('https://endpoint/' + id);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function fetchPosts({currentPage, filterStatus, search, limit = 12}: IPostsParams) {

    const urlParams: Record<string, string> = {
        page: `${currentPage}`,
        filter: `${filterStatus}`,
        limit: `${limit}`
    };

    if (search) {
        urlParams.search = search;
    }

    const searchParams = new URLSearchParams(urlParams).toString();

    const response = await fetch(`${apiUrl}/post?${searchParams}`);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}