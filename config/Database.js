const mysql = require('mysql2');

// create conn
const db = 'localhost'
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: db,
    multipleStatements: true
});

con.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected to database "' + db +'"');
});

module.exports = con;