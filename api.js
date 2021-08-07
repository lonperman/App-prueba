const API = 'https://jsonplaceholder.typicode.com/users';

export const Users = async () => {
    const res = await fetch(API);
    const data = res.json();
    //console.log(res);
    return data;
};