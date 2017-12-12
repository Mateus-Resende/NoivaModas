const db = require('electron-db');

let init = {
    dbInit: function () {
        let tables = ['users', 'customers'];
        for (let tableName in tables) {
            db.createTable(tableName, (res, msg) => {
                if (res || msg === (tableName + '.json already exists!')) {
                    console.log(tableName + ' table created successfully!');
                } else {
                    console.log('error on creating the database');
                    console.log(msg);
                }
            });
        }
    }
    
};

module.exports = init;