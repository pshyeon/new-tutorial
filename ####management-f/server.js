const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

//데이터를 가져올 수 있도록
const data = fs.readFileSync('./database.json');
//해당환경설정데이터를 파싱해서 가져올 수 있도록
const conf = JSON.parse(data);
//mysql라이브러리를 불러와서 mysql 변수에 담을 수 있도록 한다.
const mysql = require('mysql');
//connection변수는 내부적으로 속성값을 입력받아서 실제로 mysql에 연결한 그 연결객체를 우리가 다룰 수 있도록 해준다.
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});
connection.connect();

app.get('/api/customers', (req,res)=>{
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));