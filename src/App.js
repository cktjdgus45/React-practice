import React, {Component} from 'react';
import './App.css';
import Customer from './component/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit *3,
    overFlowX: "auto"
  },
  table:{
    minWidth:1000
  }
})

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
    const {classes} =this.props;
  return (
    <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
           <TableCell>번호</TableCell><TableCell>이미지</TableCell><TableCell>이름</TableCell><TableCell>생년월일</TableCell><TableCell>성별</TableCell><TableCell>직업</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
        {customers.map(customers=>{return(<Customer key={customers.id} id={customers.id}  image={customers.image}  name={customers.name}   birthday={customers.birthday}   gender={customers.gender}   job={customers.job} />)})}
       </TableBody> 
     </Table>
    </Paper>
  );}
  }
  export default withStyles(styles)(App);