var config = {};

config.database = {};
config.database.db_host_name = 'myinstance.cwqqk5wbkohq.ap-south-1.rds.amazonaws.com';
config.database.db_master_user = 'gaurav';
config.database.db_master_password = 'gauravdhra';
config.database.db_name = 'gauravdb';


//routing
config.routing = {};
config.routing.common_route = '/loot';


//routing
config.jwt = {};
config.jwt.secret_key = '37LvDSm4XvjYOh9Y';
config.jwt.expires_in = '100m';


//port
config.server_port = 3000;


module.exports = config;
