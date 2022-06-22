const process = require('process');
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('./asyncConfig/config');
const loginRouter = require('./asyncConfig/managementSystemApi/login');
const app = express();
const router = express.Router();

process.on('unhandledRejection', (reason, p) => {
  console.log('[CATCH ERROR] -', reason, p)
});

process.on('uncaughtException', (error) => {
  console.log('[GRAMMAR ERROR] -', error)
});


// loginRouter(router);

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

app.use(bodyParser.json())

app.use(router);

app.listen(8081, function () {
  console.log("应用实例启动");
})
