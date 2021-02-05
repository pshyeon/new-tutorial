import React, { Component } from 'react';
import Customer from './components/Customer';
import logo from './logo.svg';
import './App.css';

const customers = [
  {
    'id': '1',
    'image': 'https://placeimg.com/64/64/1',
    'name': '박승현',
    'birthday': '970703',
    'gender': '여자',
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
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
              id={c.id}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            );
          })
          }

        </div>
    );
  }
}

export default App;
