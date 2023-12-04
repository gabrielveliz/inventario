const database = require('../config/database');

const inventoryModel = {
    getAllItems: () => {
        return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';
        database.query(query, (error, results) => {
            if (error) {
            reject(error);
            } else {
            resolve(results);
            }
            });
        });
    },
}

module.exports = inventoryModel;