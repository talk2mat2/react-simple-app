import React, { useEffect, useContext } from "react";
import { Datacontext } from "./components/Dataprovider";

const Successpay = ({ Message }) => {
  const [state,setState] = useContext(Datacontext);
  
  useEffect(() => {
    setTimeout(() => {
      setState({...state, paymentStatus: null });
    }, 8000);
  });


  return (
    <dv>
      <p>server response:</p>
      {Message}
    </dv>
  );
};

export default Successpay;
