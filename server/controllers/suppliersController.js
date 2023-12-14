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
    addSupplier: async (req,res) =>{
        const {name,address,contact_person,contact_number,state} = req.body;
        
        try{
            await suppliersService.addSupplier(name,address,contact_person,contact_number,state);
            res.status(200).json({success:true})
        }
        catch(error){
            console.error('Error al obtener proveedores:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },
    editSupplier: async (req,res) =>{
        const {id,name,address,contact_person,contact_number,state} = req.body;

        try{
            await suppliersService.editSupplier(id,name,address,contact_person,contact_number,state);
            res.status(200).json({success:true})
        }
        catch(error){
            console.error('Error al editar proveedor:', error);
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    },

};

module.exports = suppliersController;