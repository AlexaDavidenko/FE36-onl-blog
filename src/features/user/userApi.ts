import {tmsApiUrl} from '../../settings/settings';
import {ILoginParams} from './ILoginParams';
import {ISignUpParams} from './ISignUpParams';

export async function loginUser({email, password}: ILoginParams) {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    const fetchParams = {
        method: 'POST',
        body: formData
    }

    const response = await fetch(`${tmsApiUrl}/auth/jwt/create`, fetchParams);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function signUpUser({username, email, password}: ISignUpParams) {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    //agarkova.al+tms@yandex.ru
    // 123TMS!@
    const fetchParams = {
        method: 'POST',
        body: formData
    }

    const response = await fetch(`${tmsApiUrl}/auth/users/`, fetchParams);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function loadUser(token: string) {
    const fetchParams = {
        headers: {
            Authorization: 'Bearer ' + token
        },
        method: 'GET'
    }

    const response = await fetch(`${tmsApiUrl}/auth/users/me/`, fetchParams);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}