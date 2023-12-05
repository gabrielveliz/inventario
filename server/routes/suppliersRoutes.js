//Rutas proveedores
const express = require('express');
const suppliersController = require('../controllers/suppliersController');

const routersup = express.Router();

routersup.get('/', suppliersController.getAllItems);


module.exports = routersup;