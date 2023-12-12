//modelo para seccion usuarios
const database = require('../config/database');

const userModel = {
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
        const query = 'SELECT users.id AS "id", users.user AS "username",  users.block AS "state" , role.name_rol AS "role"  from users join role where users.id_role = role.id ORDER BY id asc';
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

module.exports = userModel;