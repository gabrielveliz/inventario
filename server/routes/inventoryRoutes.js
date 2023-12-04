const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', inventoryController.getAllItems);


module.exports = router;