// modelo de proveedores
const database = require('../config/database');

const suppliersModel = {
    getAllItems: () => {
        return new Promise((resolve, reject) => {
        const query = 'select * from suppliers';
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

module.exports = suppliersModel;