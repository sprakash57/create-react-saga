type Options = {
    method: string,
    headers: { 'Accept': string, 'Content-Type': string }
    body?: any
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const fetchData = async ({ method, body } = { method: 'GET', body: '' }): Promise<User[]> => {
    const options: Options = { method, headers };
    if (method !== 'GET') options.body = body;
    const response = await fetch('src/utils/mockData.json', options);
    return await response.json();
}

export default fetchData;
