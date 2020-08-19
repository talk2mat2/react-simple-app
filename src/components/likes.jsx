import React, { useEffect, useState, useContext ,useMemo} from "react";

import { Datacontext } from "./Dataprovider";






const Likes = (props) => {
  const [values, setValues] = useState({ loading: true });
  const [totallikes, setTotallikes] = useState(0);
  const [state, setState] = useContext(Datacontext);



  useEffect(() => {
    
    setTimeout(() => {
      setValues({ ...values, loading: false });
    }, 3000);
  });

 
  const CallCulateLikes = async () => {
    let totalvalue = [];
    await state.users.map((user) => totalvalue.push(user.likes));
    const sum = await totalvalue.reduce((a, b) => a + b, 0);
  console.log(sum)
  

   
  //  console.log("totallikes",totallikes)

    // setState.totalLikes(sum);
  };
 

  
  

  


  const handleClick =async (e) => {
    
    console.log(e.target.name, e.target.id);
    const updatelikes = (index) => {
      let newArray = [...state.users];
      newArray[index] = {
        ...newArray[index],
        likes: newArray[index].likes + 1,
      };
      setState({ ...state, users: newArray });
    };
    const reducelikes = (index) => {
      
      let newArray = [...state.users];
      newArray[index] = {
        ...newArray[index],
        likes: newArray[index].likes > 0 ? newArray[index].likes - 1 : 0,
      };
      setState({ ...state, users: newArray });
     
    };
    if (e.target.name === "like") {
      state.users.map((user, index) =>
        user.id === parseInt(e.target.id) ? updatelikes(index) : null
      );
    } else {
      props.likes.map((user, index) =>
        user.id === parseInt(e.target.id) ? reducelikes(index) : null
      );
    }
     
   
  };

  const LikesUsers = (props, values) => {
    const users = values.loading ? (
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.." />
    ) : (
      props.likes.map((Element) => (
        <ul key={Element.id}>
          <h5>name: {Element.name}</h5>
          <p>
            <button 
              id={Element.id}
              name="like"
              onClick={handleClick}
              className={"like-btn"}
            >
              like
            </button>
            likes: {Element.likes}
            <button 
              name="unlike"
              onClick={handleClick}
              className={"like-btn2"}
              id={Element.id}
            >
              unlike
            </button>
          </p>
        </ul>
      ))
    );

    return users;
  };

  return (
    <div className="App-header">
      <h4>total likes={state.totalLikes}</h4>
      <h4>total likes={totallikes}</h4>
      
      <div>{LikesUsers(props, values)}</div>
    </div>
  );
};

export default Likes;
