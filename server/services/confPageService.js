const confPageModel = require('../models/confPageModel');

const confPageService = {
    getConf: async () =>{
        try {
            const items = await confPageModel.getConf();
            return items;
        } catch (error) {
            throw error;
        }
    },
}

module.exports = confPageService;