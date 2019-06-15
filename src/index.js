import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import { createStore } from "redux";
import { Provider } from 'react-redux';
let initialState={firstName:'',lastName:'',email:'',password:''}
function reducer(state = initialState, action) {
 console.log("initial");
  switch(action.type){
case 'firstName':
      return {...state,firstName:action.payload}
     // return {firstName:state.firstName}
case 'lastName':
  return{...state,lastName:action.payload}
//return {lastName:state.lastName}
case 'email':
 return {...state,email:action.payload}
 //return {email:state.email}
default:
  return state
  }
}
const store=createStore(reducer)
const App=()=>(
  <Provider store={store}>
  <Store/>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));