import './App.css';
import Customer from './components/Customers';
import React, { Component } from 'react';

const customers = [
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

  }]
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
      </div>
    );
  }
}

export default App;
