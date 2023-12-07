//Rutas: URLs que la aplicación puede manejar y cómo deben manejarse. se refiere a las solicitudes HTTP
const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', inventoryController.getAllItems);
router.post('/add',inventoryController.addProduct);
router.delete('/delete/:id',inventoryController.delProduct);


module.exports = router;