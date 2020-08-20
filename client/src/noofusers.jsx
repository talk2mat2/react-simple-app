import React, { useContext, useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Datacontext } from "./components/Dataprovider";
import styled  from "styled-components"
import {Styledpaagination,
  Wrapper,
  StyledUsers} from './css'

const Footerdata= styled.h2`
  font-size:14px;
  padding-top:1rem;

  `
   const Headpara= styled.h1`
  color:red;
  display:flex;
  
  `
 

  const StyledButton= styled.button`
  background-color:blue;
  color:white;
 padding:0.2rem;
 border-radius:2px;
 border:none;
 margin:0.2rem;
 &:hover{
  color:blue;
  background-color:white;
  }
  `
 


function Numberofusers() {
  const [state] = useContext(Datacontext);
  const [values, setValues] = useState({loading:true});
 

  useEffect(() => {
    setTimeout(() => {
      setValues({ ...values, loading: false});
    }, 3000);
  });

 
 

  const listUsers = () => {
   
    const users = values.loading ? 
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.."/>:<StyledUsers><h2> <p>users</p> total registerd users is {state.users.length}</h2></StyledUsers>
      
    return users;
  };

  return (
    <div className="App">
      <header className="App-header">  
   <Headpara >total number of users</Headpara>
<StyledUsers>{listUsers(state,values)}</StyledUsers>
        
        <Wrapper >
       <p>just trying to test whats going on</p>
       <Footerdata >this is a foot of head</Footerdata>
       
       </Wrapper>
       <Styledpaagination page={""}><StyledButton>page1</StyledButton></Styledpaagination>
        </header>
    </div>
  );
}

export default Numberofusers;
