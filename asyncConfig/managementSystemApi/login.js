const mysql = require('../config');

module.exports = (router) => {
    // get接口all
    router.route('/all').get((req, res)=>{
        console.log(req._parsedUrl.search)
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
        console.log(req.body, req.params)
        const selectSql = 'SELECT * FROM websites';
        mysql.connect(selectSql, {}, (err, result)=>{
            if(err){
                throw new Error(err);
            };
            res.send(result);
        })
    });
};