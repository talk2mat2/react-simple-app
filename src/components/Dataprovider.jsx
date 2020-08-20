import React, {  createContext, useState } from "react";
import Data from "../components/contextdata/data";

export const Datacontext = createContext();

export const Dataprovider = (props) => {
  const [state, setState] = useState({ users: Data ,loading:false,totalLikes:0,paymentStatus:null});

  return (
    <Datacontext.Provider value={[state, setState]}>
      {props.children}
    </Datacontext.Provider>
  );
};


