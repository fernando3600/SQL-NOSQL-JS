const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

sqlite3.verbose()

let openDb = async () => {
    return await open({
        filename: '../sqlite/shop.db',
        mode: sqlite3.OPEN_READWRITE,
        driver: sqlite3.Database
      })
}

module.exports = {
    openDb
}