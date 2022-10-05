//const mongoose = require('mongoose');
//
//
//const dbConnection = async() => {
//
//    try {
//        await mongoose.connect( process.env.DB_CNN, {
//            useNewUrlParser: true,
//            useUnifiedTopology: true,
//            useCreateIndex: true
//        });
//
//        console.log('DB Online');
//        
//
//    } catch (error) {
//        console.log(error);
//        throw new Error('Error en la base de datos - Hable con el admin');
//    }
//
//}
//
//module.exports = {
//    dbConnection
//}

const mysql=require('mysql')

var conexion=mysql.createConnection({
    host:'',
    database:'',
    user:'',
    password:''

})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion Exitosa')
    }
})