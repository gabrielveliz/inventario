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
    addSupplier:(name,address,contact_person,contact_number,state) =>{
        return new Promise((resolve,reject)=> {
            const query = "INSERT INTO suppliers (name,address,contact_person,contact_number,state) VALUES (?,?,?,?,?)";
            database.query(query,[name,address,contact_person,contact_number,state]),(error,results) =>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            }
        }  
        )
    },
    editSupplier:(id,name,address,contact_person,contact_number,state) =>{
        return new Promise((resolve,reject)=> {
            const query = "UPDATE suppliers SET name=?,address=?,contact_person=?,contact_number=?,state=? WHERE id=?";
            database.query(query,[name,address,contact_person,contact_number,state,id]),(error,results) =>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            }
        }  
        )
    },
    delSupplier:(id) =>{
        return new Promise((resolve,reject)=> {
            const query = "DELETE FROM suppliers WHERE id=?";
            database.query(query,[id]),(error,results) =>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            }
        }  
        )
    },
}

module.exports = suppliersModel;