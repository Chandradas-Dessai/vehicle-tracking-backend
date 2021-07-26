// module.exports = {
//     "port": 4000,
//     "appEndpoint": "http://localhost:4000",
//     "apiEndpoint": "http://localhost:4000",
//     "environment": "dev",
//     "db_name":"vehicle-app",
//     "db_username":"postgres",
//     "db_password":"root",
//     "db_host":"localhost",
//     "db_dialect":"postgres",
// "dialectOptions": {
//     "ssl": true
//   }
// };



const env = {
    database: 'd4a11q4ifmusoi',
    username: 'ibgvqlpvxmzafz',
    password: '648ee74e3884d842b425724ccfc335a94cadafb7e366bd7164b8246327da0be9',
    host: 'ec2-34-228-100-83.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;

// module.exports = {
//     "port": 4000,
//     "appEndpoint": "https://vehicle-node-backend.herokuapp.com:4000",
//     "apiEndpoint": "https://vehicle-node-backend.herokuapp.com:4000",
//     "environment": "dev",
//     "db_name":"d4a11q4ifmusoi",
//     "db_username":"ibgvqlpvxmzafz",
//     "db_password":"648ee74e3884d842b425724ccfc335a94cadafb7e366bd7164b8246327da0be9",
//     "db_host":"ec2-34-228-100-83.compute-1.amazonaws.com",
//     "db_dialect":"postgres",
//     "dialectOptions": {
//   "ssl": true
// }
// };