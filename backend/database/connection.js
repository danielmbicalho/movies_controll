const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JF<o+saCPAy;vU8p',
    database: 'movies-control'
})

module.exports = Connection;
