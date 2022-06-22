const mysql = require('mysql');

module.exports = {
    config: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database : 'mysql'
    },
    connect(sql, params, callback) {
        let request = mysql.createConnection(this.config);
        request.connect();
        request.query(sql, params, callback);
        request.end();
    }
};