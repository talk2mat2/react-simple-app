import React ,{useEffect} from "react";
import "./navbarstyle.css";
import { Link } from "react-router-dom";



const Nav = (props) => {
 useEffect(()=>{
console.log("nave redndere")
 })

  return (
    <nav>
      <ul><Link to="/likes">
        <li><button>likes</button></li></Link>
        <Link to="/">
          <li><button>home</button></li>
        </Link>
        <Link to="/users">
        <li><button>No.of users-({props.users.length})</button></li> </Link>
      </ul>
    </nav>
  );
};

export default Nav;
