import "whatwg-fetch";

import getBaseUrl from './baseUrl';

const baseurl = getBaseUrl();

export function getUsers() {
    console.log(baseurl) //eslint-disable-line no-console
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`)
}

function get(url) {

    return fetch(baseurl + '/' + url).then(onSuccess, onError);

}

function del(url) {
    const request = new Request(`${baseurl}/${url}`, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError)

}

function onSuccess(response) {
    return response.json();
}

function onError(err) {
    console.log(err); //eslint-disable-line no-console
}