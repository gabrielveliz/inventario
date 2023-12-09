//Service:  encapsulan la lógica de negocio y son utilizados por los controladores 
//para realizar operaciones específicas en los datos o en otros servicios.
const inventoryModel = require('../models/inventoryModel');

const inventoryService = {
    getAllItems: async () => {
    try {
        const items = await inventoryModel.getAllItems();
        return items;
    } catch (error) {
        throw error;
    }
    },
    addProduct: async (name,descr,price,state,id_supp) =>{
        try{
            await inventoryModel.addProduct(name,descr,price,state,id_supp);
        }
        catch(error){
            throw error;
        }
    },
    delProduct: async (id) =>{
        try{
            await inventoryModel.delProduct(id);
        }
        catch(error){
            throw error;
        }
    },
    editProduct: async (idprod,name,descr,price,state,id_supp) =>{
        try{
            await inventoryModel.editProduct(idprod,name,descr,price,state,id_supp);
        }
        catch(error){
            throw error;
        }
    },


};

module.exports = inventoryService;