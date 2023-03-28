const { openDb } = require("../config/connSqLite")

let getRows = async (table ="clientes") => {
    const db = await openDb()

    const result = await db.all(`SELECT * FROM ${table}`)
    
    return result
    
}

module.exports = {
    getRows
}

