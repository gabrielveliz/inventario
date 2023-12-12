//servicios para seccion usuarios
const usermodel = require('../models/userModel');

const userService = {
    getAllUsers: async () => {
    try {
        const items = await usermodel.getAllUsers();
        return items;
    } catch (error) {
        throw error;
    }
    },
}

module.exports = userService;