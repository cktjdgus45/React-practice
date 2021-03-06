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
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomerAdd from './component/CustomerAdd';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop : `theme.spacing.unit*3`,
    overFlowX: "auto"
  },
  table:{
    minWidth:1000
  },
  progress: {
    margin:`theme.spacing.unit*2`
  }
})



class App extends Component {
  
  state={
    customers:"",
    completed:0
  }

  stateRefresh = () =>{
    this.setState({
      customers:'',
      completed:0
    });
    this.callApi()
    .then(res=>this.setState({customers:res}))
    .catch(err=>console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res=>this.setState({customers:res}))
    .catch(err=>console.log(err));
  }

  callApi = async ()=>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const {completed} = this.state;
    this.setState({completed:completed >=100 ? 0 : completed +1});
  } 
  render(){
    const {classes} =this.props;
  return (
    <div>
     <Paper className={classes.root}>
      <Table className={classes.table}>
       <TableHead>
         <TableRow>
           <TableCell>번호</TableCell><TableCell>이미지</TableCell><TableCell>이름</TableCell><TableCell>생년월일</TableCell><TableCell>성별</TableCell><TableCell>직업</TableCell>
         </TableRow>
       </TableHead>
        <TableBody>
        {this.state.customers ? this.state.customers.map(customers=>{
          return(<Customer key={customers.id} id={customers.id}  image={customers.image}  name={customers.name}   birthday={customers.birthday}   gender={customers.gender}   job={customers.job} />)})
        :
         < TableRow>
           <TableCell colspan="6"align="center">
             <CircularProgress className={classes.progress} variant="determinate"value={this.state.completed}/>
           </TableCell>
         </TableRow>
          }
        </TableBody> 
       </Table>
     </Paper>
     <CustomerAdd stateRefresh={this.stateRefresh}/>
    </div>
   
  );}
  }
  export default withStyles(styles)(App);