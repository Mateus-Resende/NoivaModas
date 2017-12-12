// const db = require('electron-db');

export function UserDAO(){
    
    this._defaultQueryFunction = function(successCB, failCB){
        let defaultFunction = function(error, data){
            if(data && !error) {
                successCB(data);
            } else {
                failCB(error, data);
            }
        };
        
        return defaultFunction;
    };
    
    this._findByEmail = function(tableName, email, callback) {
        // db.getRows(tableName, { email: email }, (res, data) => {
        //     callback(res, data);
        // });
    };
    
    this.getUser = function(email, successCB, failCB) {
        console.log('ElectronDB - Get User - _findByEmail(' + email + ')');
        this._findByEmail('user', email, this._defaultQueryFunction(successCB, failCB));
    };
    
    this.listAllUsers = function(successCB, failCB) {
        console.log('ElectronDB - List all Users');
        // db.getAll('users', this._defaultQueryFunction(successCB, failCB));
    }

}