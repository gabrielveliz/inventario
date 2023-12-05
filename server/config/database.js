// Configuración de la base de datos
const mysql = require('mysql');

let dbd={
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"inv_sys"
}

const db = mysql.createConnection(dbd);

db.connect((err)=>{
    if(err)
    {
        console.log('Failed Connection: ',err);
    }
    else
    {
        console.log('BD Connection succeed');
    }
});

module.exports = db;