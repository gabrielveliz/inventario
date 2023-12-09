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

    //apartado Productos
    getProducts:()=>api.get('/products'),
    addProduct:async(dataproduct)=>api.post('/products/add',dataproduct),
    deleteProduct:async(id)=>await api.delete(`/products/delete/${id}`),
    editProduct:async(dataproduct)=>api.put('/products/edit/',dataproduct),

    //apartado proveedores
    getSupp:()=>api.get('/suppliers'),

    //apartado Login y usuarios
    postLogin:async(credentials)=>api.post('/users/login',credentials),
    

}

export default apiRequests;