'use strict'

const db = require('../config/connMongo');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

const _ventas = new schema({
  "id": { type: Number },
  "sucursalId": { type: Number },
  "ventasId": { type: Number },
  "fecha": {type: String}
});

let ventas = db.model('ventas', _ventas);

module.exports = ventas