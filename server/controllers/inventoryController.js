// Controladores: manejan las solicitudes HTTP y contienen la lógica de la aplicación. 
//Son responsables de interactuar con los modelos y devolver las respuestas adecuadas al cliente.
const inventoryService = require('../services/inventoryService');

const inventoryController = {
    getAllItems: async (req, res) => {
        try {
            const items = await inventoryService.getAllItems();
            res.status(200).json({ success: true, items });
        } catch (error) {
            console.error('Error al obtener Products:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

};

module.exports = inventoryController;