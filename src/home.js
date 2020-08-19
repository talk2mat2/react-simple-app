import React, { useContext, useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Datacontext } from "./components/Dataprovider";
import { Link } from "react-router-dom";
import StripeCheckoutButton from './components/stripButon/strip-buttton.componens'


function Home() {
  const [state, setState] = useContext(Datacontext);
  const [localstate, setLocalstate] = useState({ loading: true });

  useEffect(() => {
    setTimeout(() => {
      setLocalstate({ loading: false });
    }, 2000);
  });

  const handleDelete = (e) => {
    console.log(e.target.id);
    state.users.map((Elements) =>
      Elements.id === parseInt(e.target.id)
        ? setState({
            ...state,
            users: state.users.filter(
              (single) => single.id !== parseInt(e.target.id)
            ),
          })
        : null
    );
  };
  const listUsers = (state) => {
    const users = localstate.loading ? (
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.." />
    ) : state.users.length < 1 ? (
      <h1>empty..<br/>try add new users</h1>
    ) : (
      state.users.map((Element) => (
        <div key={Element.id}>
          <ul>
            
            <li>
              <Link to={`/${Element.id}`}>{Element.name}</Link>
              <button
                className="btn-del"
                id={Element.id}
                onClick={handleDelete}
              >
                del
              </button>
            </li>
          </ul>
        </div>
      ))
    );

    return users;
  };
 

  return (
    <div className="">
      <header className="App-header">
        <div>{listUsers(state)}</div>
        <StripeCheckoutButton price={state.users.length} />
      </header>
    </div>
  );
}

export default Home;
