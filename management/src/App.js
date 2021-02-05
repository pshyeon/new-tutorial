import React, {Component} from 'react';
import Customer from './components/Customer';
import logo from './logo.svg';
import './App.css';

const customers =[{
  'id': 1,
  'image' :"https://placeimg.com/64/64/1",
  'name' : '나동빈',
  'birthday' : '961212',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image' :"https://placeimg.com/64/64/2",
  'name' : '나동빈',
  'birthday' : '961212',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 3,
  'image' :"https://placeimg.com/64/64/3",
  'name' : '나동빈',
  'birthday' : '961212',
  'gender' : '남자',
  'job' : '대학생'
}]

class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              )
          })
        }
      </div>

    );
  }
}


export default App;
