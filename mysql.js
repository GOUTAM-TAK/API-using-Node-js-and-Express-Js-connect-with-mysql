var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '16earee025',
    database: 'test',
    port: 3306,
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = connection;