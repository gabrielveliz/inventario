//Servicio de proveedores
const suppliersModel = require('../models/suppliersModel');

const suppliersService = {
    getAllItems: async () => {
    try {
        const items = await suppliersModel.getAllItems();
        return items;
    } catch (error) {
        throw error;
    }
    },
    addSupplier: async (name,address,contact_person,contact_number,state) =>{
        try{
            await suppliersModel.addSupplier(name,address,contact_person,contact_number,state);
        }
        catch(error){
            throw error;
        }
    },
    editSupplier: async (id,name,address,contact_person,contact_number,state) =>{
        try{
            await suppliersModel.editSupplier(id,name,address,contact_person,contact_number,state);
        }
        catch(error){
            throw error;
        }
    },

};

module.exports = suppliersService;