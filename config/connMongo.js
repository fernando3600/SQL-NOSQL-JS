'use strict'

const mongoose = require('mongoose');
mongoose.set("debug", false)
mongoose.Promise = global.Promise;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    appname: `SQL-NoSql`,
}

//const devMx = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@clstrmaxiprod1.sllbd.mongodb.net/${process.env.HOST_DB}`;
const pathConnection = "mongodb://127.0.0.1:27017/local"
const connection = mongoose.createConnection(pathConnection, config, function (err) {
    if (err)
        console.log('Unable to connect to ');
    else
        console.log('Connected !');
});

connection.on('reconnected',() => console.log('Reconectando'));
connection.on('disconnected',()=>{
  console.log('disconnected');
  throw new Exception('Se desconecto');
}); 
connection.on('connecting',() => console.log('Conectando...'));
connection.on('connected', () => console.log('Conectado'));
connection.on('open',() => console.log('Abierta'));
connection.on('close',() =>console.log('Cerrado'));

module.exports = connection;