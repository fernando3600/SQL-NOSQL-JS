'use strict'

const db = require('../config/connMongo');
let mongoose = require('mongoose');
let schema = mongoose.Schema;

const _clientes = new schema({
    "id": {type: Number},
    "name": {type: String},
    "lastName": {type: String},
    "rfc": {type: String},
    "email": {type: String},
    "phone": {type: String}
  });

let clientes = db.model('clientes', _clientes);

module.exports = clientes