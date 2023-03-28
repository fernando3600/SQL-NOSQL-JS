'use strict'

const db = require('../config/connMongo');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

const _sucursales = new schema({
  "id": { type: Number },
  "nombre": {type: String},
  "direccion": {type: String},
  "latitud": {type: String},
  "longitud": {type: String}
});

let sucursales = db.model('sucursales', _sucursales);

module.exports = sucursales