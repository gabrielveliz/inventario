const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');


const app = express();
const port=3001;

//mid
app.use(cors());
app.use(bodyParser.json());

//rutas para el servidor
app.use('/users',userRoutes);
app.use('/products', inventoryRoutes);

app.listen(port,()=>{
    console.log("Running on port "+port)
})