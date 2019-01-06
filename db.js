var mysql = require('mysql');
var config = require('./config/config.js')

var connection = mysql.createPool({
    host: config.database.db_host_name,
    user: config.database.db_master_user,
    password: config.database.db_master_password,
    database: config.database.db_name
});



module.exports = connection;