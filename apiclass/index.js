const express = require('express');
const { dbConnect } = require('./src/config/db');
const router = require('./src/routes/product.routes');

const app = express();
app.use( express.json() );
app.use( router )

dbConnect()
















app.listen(3000, ()=>{
    console.log('server running');
} );

