const db = require("../db/dbconnect");


class Roupa { 

    static async readAllRoupas() {
        console.log("roupas.model.js", "readAllRoupas()");
        
            const query = "SELECT * FROM roupas"; 
        
        return db.executarQuery(query);
    }
}

module.exports = Roupa;

