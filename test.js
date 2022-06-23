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

loginRouter(router);

app.use(bodyParser.json())

app.use(router);

app.listen(8081, function () {
  console.log("应用实例启动");
})
