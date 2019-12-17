import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer'

const customers =[
  {
  'id':1,
  'image':'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday': '971022',
  'gender': 'male',
  'job': 'student'
   },
  {
  'id':2,
  'image':'http://placeimg.com/64/64/2',
  'name' : '김유동',
  'birthday': '960922',
  'gender': 'male',
  'job': 'professor'
   },
   {
  'id':3,
  'image':'http://placeimg.com/64/64/3',
  'name' : '천유동',
  'birthday': '920421',
  'gender': 'male',
  'job': 'programmer'
  }
]
class App extends Component {
  render(){
  return (
    <div>
      { customers.map(customers => {
        return(
          <Customer 
          key={customers.id}
          id={customers.id} 
          image={customers.image}
           name={customers.name} 
           birthday={customers.birthday}
           gender={customers.gender}
           job={customers.job} />
        )
      } ) }
    </div>
  );}
  }
  export default App;