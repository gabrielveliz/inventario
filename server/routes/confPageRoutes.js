const express = require('express');
const confPageController = require('../controllers/confPageController');

const router = express.Router();

router.get('/', confPageController.getConf);

module.exports = router;