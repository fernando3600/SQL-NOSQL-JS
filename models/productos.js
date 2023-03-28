'use strict'

const db = require('../config/connMongo');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

const _productos = new schema({
  "id": { type: Number },
  "nombre": {type: String},
  "unidadMedida": {type: String},
  "precioUnitario": { type: Number }
});

let productos = db.model('productos', _productos);

module.exports = productos