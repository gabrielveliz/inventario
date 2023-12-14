//Rutas proveedores
const express = require('express');
const suppliersController = require('../controllers/suppliersController');

const routersup = express.Router();

routersup.get('/', suppliersController.getAllItems);
routersup.post('/add',suppliersController.addSupplier);
routersup.put('/edit',suppliersController.editSupplier);


module.exports = routersup;