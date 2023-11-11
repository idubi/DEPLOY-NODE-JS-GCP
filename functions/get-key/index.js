
// import {initConnection,  getValueForKey,  endConnection}  from './maria_utils.js'
const maria = require('./maria_utils');
const  mysql = require('mysql2')
exports.helloWorld = (req, res) => {
  res.send('Hello, World');
};


const dbConfig = {
  host: 'localhost',
  user: 'scores',
  password: 'scores',
  database: 'scoresdb'
};
// Create a connection pool

const pool = mysql.createPool(dbConfig);

exports.getKey = async (req, res) => {
    const key = req.query.key?req.query.key:''
    const r = await maria.getValue(pool,key)
    res.send(r[0]);
  };
