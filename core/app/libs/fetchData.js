import { USERS } from '../constants';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const fetchData = (params = { method: 'GET', body: '' }) => {
    const { method, body } = params;
    const options = { method, headers };
    if (method !== 'GET') options.body = body;
    return fetch(USERS, options).then(response => response.json());
}

export default fetchData;
