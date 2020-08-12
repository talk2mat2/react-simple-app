import React, { useContext } from "react";
import "./navbarstyle.css";
import { Link } from "react-router-dom";
import { Datacontext } from "../Dataprovider";

const Nav = () => {
  const [state] = useContext(Datacontext);
  return (
    <nav>
      <ul>
        <li><button>likes</button></li>
        <Link to="/">
          <li><button>home</button></li>
        </Link>
        <Link to="/users">
        <li><button>No.of users-({state.users.length})</button></li> </Link>
      </ul>
    </nav>
  );
};

export default Nav;
