import express from 'express';
import { connectDB } from './src/config/db.js';
import router from './src/routes/products.routes.js';
const app = express();

app.use( express.json() );

connectDB();

app.use('/api', router);
// http://localhost:3000/api/products


app.listen(3000, ()=>{
    console.log('servidor corriendo');
});

// Typescript