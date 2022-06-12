import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "o1011920820!",
  database: "popeteDB",
});

export default db;
