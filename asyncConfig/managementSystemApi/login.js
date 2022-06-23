const mysql = require('../config');

module.exports = (router) => {
    // get接口all
    router.route('/all').get((req, res)=>{
        console.log(req.body)
        const selectSql = 'SELECT * FROM websites';
        mysql.connect(selectSql, {}, (err, result)=>{
            if(err){
                throw new Error(err);
            };
            res.send(result);
        })
    })
    // post接口all
    router.route('/all').post((req, res)=>{
        console.log(req.body)
        const selectSql = 'SELECT * FROM websites';
        mysql.connect(selectSql, {}, (err, result)=>{
            if(err){
                throw new Error(err);
            };
            res.send(result);
        })
    });
};