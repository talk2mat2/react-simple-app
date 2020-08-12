import React, { useContext, useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Datacontext } from "./components/Dataprovider";

function DetailView({ match }) {
  const [state, setState] = useContext(Datacontext);
  const [values, setValues] = useState({loading:true});
  const id = match.params.id;

  useEffect(() => {
    setTimeout(() => {
      setValues({ ...values, loading: false});
    }, 3000);
  });


  const listUsers = (state,values) => {
   
    const users = values.loading ? (
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.."/>
    ) : ( 
      state.users.map((Element) =>
        Element.id === parseInt(id) ? (
        
            <ul key={Element.id}>
              <h1>name: {Element.name}</h1>
              <p>Age: {Element.age}</p>
              <p>phone: {Element.phone}</p>
            </ul>
          
        ) : null
      )
    );

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

export default DetailView;
