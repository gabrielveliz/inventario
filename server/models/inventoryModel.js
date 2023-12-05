//Models: Definen cómo interactuar con la base de datos. 
//Contienen métodos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos.
const database = require('../config/database');

const inventoryModel = {
    getAllItems: () => {
        return new Promise((resolve, reject) => {
        const query = 'SELECT products.id AS "id",products.name AS "name",products.price AS "price",products.state AS "state",suppliers.name AS "name_supplier" FROM products JOIN suppliers WHERE products.id_supp=suppliers.id;';
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