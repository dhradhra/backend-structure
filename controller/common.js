const _ = require('underscore');
var jwt = require('jsonwebtoken');
var config = require('../config/config.js');


module.exports = {
    login
}

function login(body,connection){

    return new Promise(function(resolve,reject){
        connection.getConnection(function(err,db){

            var create = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

            var insert = "INSERT INTO customers (name, address) VALUES ('gaurav Inc', 'Highway 37')";

            var fetch = "SELECT * FROM customers"

            db.query(fetch, function (error, results) {
                // And done with the connection.
                db.release();
                // Handle error after the release.
                if (error) reject (error)
                else {
                    var token = jwt.sign({ email: body.email }, config.jwt.secret_key, { expiresIn: config.jwt.expires_in });
                    resolve({ results,token });
                }                    
            });
        })
    
    })
}