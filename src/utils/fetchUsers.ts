const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://gist.githubusercontent.com/sprakash57/10f77db3679bdee55aa206e2f1374ea4/raw/a153d9e74fd3392597bcb8362f7b2bc4096a1253/users.json');
    return await response.json();
}

export default fetchUsers;
