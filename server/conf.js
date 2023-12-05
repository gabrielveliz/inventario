const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const suppliersRoutes= require('./routes/suppliersRoutes');


const app = express();
const port=3001;

//mid
app.use(cors());
app.use(bodyParser.json());

//****rutas para el servidor***

// rutas usuarios
app.use('/users',userRoutes);

//rutas productos
app.use('/products', inventoryRoutes);

//rutas proveedores
app.use('/suppliers',suppliersRoutes);


app.listen(port,()=>{
    console.log("Running on port "+port)
})