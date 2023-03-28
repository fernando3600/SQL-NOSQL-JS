const XmlReader = require('xml-reader');
const xmlQuery = require('xml-query');
const fs = require("fs")

const fsPromises = fs.promises;

let getdataXml = async () => {
    await fsPromises.readFile("../xml/")
}
