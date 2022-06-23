const connection = require("mysql");

module.exports = (sql, SqlParams) => {
    return new Promise((resolve, reject)=>{
        connection.query(sql, SqlParams, function(err, result) {
            if (err) {
                throw new Error(err);
            };
            resolve(result)
        })
    })
}


// 查询websites表里面的所有数据
// const selectSql = 'SELECT * FROM websites';
// request(selectSql).then((res)=>{
//     console.log("[INSERT INTO] -", res);
// })

// 为websites表添加一条数据
// const addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES (0, ?, ?, ?, ?)';
// const addSqlParams = ['node', 'https://nodejs.com', '34223', 'CN'];
// request(addSql, addSqlParams).then((res)=>{
//     console.log("[INSERT INTO] -", res);
// }).catch((err)=>{
//     console.log("[INSERT ERROR] -", err);
// });

// 删除websites表里面的数据
// var delSql = 'DELETE FROM websites where id=6';
// request(delSql).then((res)=>{
//     console.log("[DELETE Id] -", res);
// }).catch((err)=>{
//     console.log("[DELETE ERROR] -", err);
// });

// 修改更新websites表里面的数据
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站中', 'https://m.jingdong.com',6];
// request(modSql, modSqlParams).then((res)=>{
//     console.log("[UPDATE Id] -", res);
// }).catch((err)=>{
//     console.log("[UPDATE ERROR] -", err);
// });
