const confPageService = require('../services/confPageService');

const confPageController = {
    getConf: async (req, res) =>{
        try {
            const items = await confPageService.getConf();
            res.status(200).json({ success: true, items });
        } catch (error) {
            console.error('Error al obtener Config:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },
}

module.exports = confPageController;