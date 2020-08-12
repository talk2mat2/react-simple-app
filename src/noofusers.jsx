import React, { useContext, useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Datacontext } from "./components/Dataprovider";

function Numberofusers() {
  const [state] = useContext(Datacontext);
  const [values, setValues] = useState({loading:true});
 

  useEffect(() => {
    setTimeout(() => {
      setValues({ ...values, loading: false});
    }, 3000);
  });


  const listUsers = (state,values) => {
   
    const users = values.loading ? 
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.."/>:<h2> <p>users</p> total registerd users is {state.users.length}</h2>
      
    return users;
  };

  return (
    <div className="App">
      <header className="App-header">
   
        <div>{listUsers(state,values)}</div>
      </header>
    </div>
  );
}

export default Numberofusers;
