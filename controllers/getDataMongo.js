const modelCliente = require("../models/clientes")
const modelDetalles = require("../models/detalles")
const modelProductos = require("../models/productos")
const modelSucursales = require("../models/sucursales")
const modelVentas = require("../models/ventas")


let getClientes = async  () => {

    let clientes = await modelCliente.find({})
    console.log(clientes) 
}

let getDetalles = async  () => {

    let detalles = await modelDetalles.find({})
    console.log(detalles) 
}

let getProductos = async  () => {

    let productos = await modelProductos.find({})
    console.log(productos) 
}

let getSucursales = async  () => {

    let sucursales = await modelSucursales.find({})
    console.log(sucursales) 
}

let getVentas = async  () => {

    let ventas = await modelVentas.find({})
    console.log(ventas) 
}
module.exports = {
    getClientes,
    getDetalles,
    getProductos,
    getSucursales,
    getVentas
}