var mysql = require('mysql')
var history = require('connect-history-api-fallback')
var cors = require('cors')
var express = require('express')
var app = express()
// 解决history模式
app.use(history())
app.use(cors())// 解决跨域
app.listen(999, () => {
  console.log('服务已启动!')
})
app.get('/', function (req, res) {
  res.send('服务已启动')
})
// 文章
app.get('/blog', function (req, res) {
  var connection = mysql.createConnection({
    host: '39.107.72.72',
    user: 'root',
    password: '1240529565',
    database: 'my_school'
  })
  connection.connect()
  var sql = 'SELECT * FROM my_blog'
  connection.query(sql, function (error, result) {
    if (error) {
      console.log('can not query anything!')
      return
    }
    res.json(result)
  })
})
