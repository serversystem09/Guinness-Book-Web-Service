/*var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'MySQLsujin!',      // Replace with your database password
  database: 'popete_db' // // Replace with your database Name
}); 
 
db.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = db;

export default db;
*/
   
import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQLsujin!',
  database: 'popete_db'
});
  
export default db;