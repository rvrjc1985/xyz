import rvr from './rvr.jpg'
import './Registration.css'
import {useState} from 'react'

function Registration(){
    const [Name,setName]=useState("")
    const [Mobile,setMobile]=useState("")
    const [Age,setAge]=useState("")
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    return (
<center>
<h1>R.V.R & J.C College of Engineering</h1>
<div className='main1'>
<div className='App'>
<header className='App-header'>
<img src={rvr} className='App-logo' alt='rvr'/>
</header>
</div>
<div className='main'>
<h2>STUDENT REGISTRATION FORM</h2>
<form>
<pre>
<b>Name             : </b><input className='input' placeholder='Name' onChange={(e)=> setName(e.target.value)}/><br/>
<b>Mobile           : </b><input className='input' placeholder='Mobile' onChange={(e)=> setMobile(e.target.value)}/><br/>
<b>Age              : </b><input className='input' placeholder='Age' onChange={(e)=> setAge(e.target.value)}/><br/>
<b>Email            : </b><input className='input' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/><br/>
<b>Password         : </b><input className='input' type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<b>Confirm Password : </b><input className='input' type='password' placeholder='Confirm Password' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<b>Address          :  </b>
<textarea rows="4" cols="31"  className='input' placeholder='Address' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
<div className='gender'>
<b>Gender      :   </b>
<input type='radio' className='input1' name='gender'/>Male
<input type='radio' className='input1' name='gender'/>Female
<input type='radio' className='input1' name='gender'/>Transgender  <br/>
</div>
</pre>
<button type='submit' className='button'>Login</button>
<button type='submit' className='button'>SignUp</button>
</form>
</div>
</div>
</center>
    )
}
export default Registration;

Registration.css
.button{
    color: rgb(238, 247, 247);
    background-color: blue;
    text-align: center;
    margin-right: 10px;
    font-weight: bold;
    width: 100px;
    height: 30px;
    border-radius: 6px;
    border: 2px solid blue;
}
.App-header {
    min-height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .App{
    float: left;
    padding-left: 200px;
    padding-top: 200px;
  }
.input{
    width: 200px;
    height: 30px;
    margin: 1% 2%;
    border-radius: 8px;
}
.main{
    background-color: rgb(203, 181, 181);
    width: 550px;
    height: 540px;
    border-radius: 10px;
    margin: 60px;
    float: right;
}
.input1{
    margin:1% 1%;
}
.main1{
    padding-right: 250px;
}

Index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Registration from './ Registration ';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Registration />
  </React.StrictMode>
);
reportWebVitals();
