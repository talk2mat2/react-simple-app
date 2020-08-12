import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Footer from './components/Footer/footer'
import { Switch,Route,Link,BrowserRouter as Router} from 'react-router-dom'
import DetailView from "./detailView"
import Adduser from "./adduser/adduser"
import Numberofusers from './noofusers'

import Nav from "./components/navbar/index";
import Home from './home'

function App() {
 
  return (
    <Router>
    <div className="App">
     
      <Nav />
      <Adduser/>
      <Switch>
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
