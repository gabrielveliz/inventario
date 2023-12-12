//Rutas para seccion usuarios
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/getusers', userController.getAllUsers);
router.post('/login',userController.login);

module.exports = router;