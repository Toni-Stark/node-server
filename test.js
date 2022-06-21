const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'mysql'
});

connection.connect();

// 查询websites表里面的所有数据
// const sql = 'SELECT * FROM websites';
//
// connection.query(sql, function(error, result) {
//     if (error) {
//         console.log('[SELECT ERROR] -', err.message);
//     };
//     console.log('-------------------SELECT-------------------');
//     console.log(result);
//     console.log('-------------------SELECT-------------------');
// })

// 为websites表添加一条数据
// const addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES (0, ?, ?, ?, ?)';
// const addSqlParams = ['node学习', 'https://nodejs.com', '34223', 'CN'];
//
// connection.query(addSql, addSqlParams, function(err, result){
//     if(err) {
//         console.log('[INSERT ERROR]-', err.message);
//         return;
//     };
//
//     console.log('--------------INSERT-----------------');
//     console.log('INSERT ID: ', result);
//     console.log('--------------INSERT-----------------');
// })

// 删除websites表里面的数据
// var delSql = 'DELETE FROM websites where id=6';
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }
//
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');
// });

// 修改更新websites表里面的数据
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

connection.end();
