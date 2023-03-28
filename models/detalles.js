'use strict'

const db = require('../config/connMongo');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

const _detalles = new schema({
  "id": { type: Number },
  "ventasId": { type: Number },
  "productosId": { type: Number },
  "cantidad": { type: Number }
});

let detalles = db.model('detalles', _detalles);

module.exports = detalles