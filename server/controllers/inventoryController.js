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
    addProduct: async (req,res) =>{
        const {name,descr,price,state,id_supp} = req.body;
        try{
            await inventoryService.addProduct(name,descr,price,state,id_supp);
            res.status(200).json({success:true})
        }
        catch(error){
            console.error('Error al obtener Products:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },
    delProduct: async (req,res) =>{
        const id = req.params.id;

        try{
            await inventoryService.delProduct(id);
            res.status(200).json({success:true})
        }
        catch(error){
            console.error('Error al eliminar producto:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },
    editProduct: async (req,res) =>{
        const {idprod,name,descr,price,state,id_supp} = req.body;

        try{
            await inventoryService.editProduct(idprod,name,descr,price,state,id_supp);
            res.status(200).json({success:true})
        }
        catch(error){
            console.error('Error al editar producto:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

};

module.exports = inventoryController;