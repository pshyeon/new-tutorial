const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

app.get('/api/customers', (req,res)=>{
  res.send([
    {
      'id': '1',
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '970703',
      'gender': '남자',
      'job': '대학생'
  
    },
    {
      'id': '2',
      'image': 'https://placeimg.com/64/64/2',
      'name': '윤상희',
      'birthday': '970813',
      'gender': '여자',
      'job': '간호사'
  
    },
    {
      'id': '3',
      'image': 'https://placeimg.com/64/64/3',
      'name': '김혜미',
      'birthday': '971221',
      'gender': '여자',
      'job': '공주님'
  
    }]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));