import axios from 'axios';

const base = 'http://localhost:3001';

const api = axios.create(
    {
        baseURL:base,
        headers:{
            'Content-Type':'application/json',
        }
    },
);

const apiRequests = {
    getProducts:()=>api.get('/products'),
    getSupp:()=>api.get('/suppliers'),
    postLogin:async(credentials)=>api.post('/users/login',credentials)
}

export default apiRequests;