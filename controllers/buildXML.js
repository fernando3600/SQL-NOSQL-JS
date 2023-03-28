const builder = require('xmlbuilder');
const fs = require("fs")
const { getRows } = require("./getDataDb")

const fsPromises = fs.promises;

let buildXml = async () => {

    let rowsClientes = await getRows("clientes")


    let root = builder.create('clientes', { encoding: 'utf-8' });

    root.com('Archivo XML generado con los datos de la tabla Clientes');

    if (rowsClientes.length) {
        for await (const clientes of rowsClientes) {
            let item = root.ele('cliente');
            item.ele(`id`, clientes.id);
            item.ele(`name`, clientes.name);
            item.ele(`lastName`, clientes.lastName);
            item.ele(`rfc`, clientes.rfc);
            item.ele(`email`, clientes.email);
            item.ele(`phone`, clientes.phone);
        }
    }

    var xml = root.end({ pretty: true });

    await fsPromises.appendFile(`../xml/clientes.xml`, xml);

}

buildXml()