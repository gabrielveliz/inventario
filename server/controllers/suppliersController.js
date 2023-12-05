//controlador de proveedores
const suppliersService = require('../services/suppliersService');

const suppliersController = {
    getAllItems: async (req, res) => {
        try {
            const items = await suppliersService.getAllItems();
            res.status(200).json({ success: true, items });
        } catch (error) {
            console.error('Error al obtener proveedores:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

};

module.exports = suppliersController;