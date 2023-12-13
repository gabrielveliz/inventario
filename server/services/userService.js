//servicios para seccion usuarios
const usermodel = require('../models/userModel');

const userService = {
    login: async (user,pass) => {
        try {
            const results = await usermodel.login(user,pass);
            return results;
        } catch (error) {
            throw error;
        }
    },
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