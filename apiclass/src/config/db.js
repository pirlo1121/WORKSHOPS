const mongoose = require('mongoose');

async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('Conectado a la base de datos')
        
    } catch (error) {
        console.log('Error al conectarnos a la base de datos')
    }
}

module.exports = { dbConnect }