// model de para las configuraciones generales del sitio
const database = require('../config/database');

const confPageModel = {
    getConf: () =>{
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM confpage where id=1';
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

module.exports = confPageModel;