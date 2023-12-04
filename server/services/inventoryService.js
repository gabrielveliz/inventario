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