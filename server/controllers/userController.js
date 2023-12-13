//controlador para seccion usuarios

const userService = require('../services/userService');

const userController = {
    login: async (req, res) => {
        const {user,pass} = req.body;
        try {
            const results = await userService.login(user,pass);
            
            if(results.length>0)
                {
                    res.status(200).send({ success: true });

                }
                else
                {
                    res.status(401).send({ success: false });

                }
        } catch (error) {
            console.error('Error al obtener respuesta:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const items = await userService.getAllUsers();
            res.status(200).json({ success: true, items });
        } catch (error) {
            console.error('Error al obtener Products:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },
};

module.exports = userController;