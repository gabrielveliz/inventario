const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/database');

const app = express();
const port=3001


//mid
app.use(cors());
app.use(bodyParser.json());

app.use('/users',userRoutes);

app.listen(port,()=>{
    console.log("Running on port "+port)
})