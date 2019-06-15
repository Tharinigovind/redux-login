import React, { Component } from 'react';
import {connect} from 'react-redux';
import { render } from 'react-dom';
class Store extends React.Component {
  constructor(){
    super();
  this.state={firstName:'',lastName:'',email:'',password:''}
}
  click1(e){
    this.setState({
       firstName:e.target.value })
    }
    click2(e){
      this.setState({
        lastName:e.target.value })
      }
      click3(e){
        this.setState({
          email:e.target.value })
        }
  clicked=(param)=>{
 console.log(this.state)
  this.props.dispatch({type:param,payload:this.state.firstName});
}
  clickedd=(param)=>{
  //  console.log(this.props);
   this.props.dispatch({type:param,payload:this.state.lastName});
  }
  clickedemail=(param)=>{
   // console.log(this.props);
    this.props.dispatch({type:param,payload:this.state.email});
  }
 render (){ 
  return (
    <div className="Store">
      <h5>SignUp</h5>
      <div>
    <label htmlFor="firstName">FirstName</label><br/>
    <input type="text" name="firstName" value={this.state.firstName} onBlur={()=>this.clicked('firstName')} onChange={(e)=>this.click1(e)}/><br />
    
 <label htmlFor="lastName">LastName</label><br/>
 <input type="text" onBlur={()=>this.clickedd('lastName')} value={this.state.lastName} onChange={(e)=>this.click2(e)}/><br/>
  
 <label htmlFor="email">Email</label><br/>
 <input type="keypad" name="email" value={this.state.email} onBlur={()=>this.clickedemail('email')} onChange={(e)=>this.click3(e)} /><br/>
 
 <label htmlFor="password">Password</label><br/>
<input type="password"/><br/>
 <button type="button" onClick={()=> this.handleLogin()}>Login</button>
 <h1>{this.state.firstName}</h1>
 <h1>{this.state.lastName}</h1>
 <h1>{this.state.email}</h1>
 </div>
</div>
  );
}
handleLogin(){
  console.log(this.state);
}}
function mapStateToProps(state){
    return {
       firstName: state.firstName,
    lastName:state.lastName,
  email:state.email
}}
// function mapDispatchToProps(dispatch) {
//   return {
//     firstName: () => {dispatch({type: 'firstName', payload:firstName} )},
//     lastName: () => {dispatch({type: 'lastName', payload:lastName} )},
//     email: () => {dispatch({type:'email', payload:email})}
//    }
// }
export default connect(mapStateToProps)(Store);

