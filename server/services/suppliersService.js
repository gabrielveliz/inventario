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

};

module.exports = suppliersService;