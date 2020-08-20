import React ,{useState,useContext} from "react";
// import logo from './logo.svg';
import "./App.css";
import Footer from './components/Footer/footer'
import { Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import DetailView from "./detailView"
import Adduser from "./adduser/adduser"
import Numberofusers from './noofusers'
import {Datacontext} from './components/Dataprovider'
import Likes from './components/likes'

import Nav from "./components/navbar/index";
import Home from './home'

function App() {
  const [state,setState]=useContext(Datacontext)
 
  return (
    <Router>
    <div className="App">
     
      <Nav users={state.users}/>
      <Adduser/>
      <Switch>
        <Route path="/Likes" render={(props) => (
    <Likes {...props} likes={state.users} setLikes={setState}/>
  )}/>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Numberofusers}/>
 
      <Route   path="/:id" component={DetailView}/>
      </Switch>
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
