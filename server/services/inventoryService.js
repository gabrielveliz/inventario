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

};

module.exports = inventoryService;