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
    editProduct:async(dataproduct)=>api.put('/products/edit',dataproduct),

    //apartado proveedores
    addsupp:async(datasupplier)=>api.post('/suppliers/add',datasupplier), //C
    getSupp:()=>api.get('/suppliers'),                                    //R
    editSupp:async(datasupplier)=>api.put('/suppliers/edit',datasupplier),//U
    deleteSupp:async(id)=>await api.delete(`/suppliers/delete/${id}`),    //D


    //apartado Login y usuarios
    postLogin:async(credentials)=>api.post('/users/login',credentials),
    getusers:async()=>api.get('/users/getusers'),

    //apartado Configuration
    getConfiguration:async()=>api.get('/configuration'),
    

}

export default apiRequests;