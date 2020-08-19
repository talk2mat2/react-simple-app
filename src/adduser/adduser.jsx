import React ,{useState,useContext}from 'react';
import './adduser.css'
import {Datacontext} from '../components/Dataprovider'


const Adduser = () => {
    const[keyinput,setKeyinput]=useState({name:"",age:"",phone:""})
const [state,setState]=useContext(Datacontext)

    const handleChange=({target})=>{
        
        setKeyinput({...keyinput,[target.name]:target.value})

    }
    const handleSubmit=(e)=>{
        if(keyinput.name===""||keyinput.age===""||keyinput.phone===""){
         alert("fill all value")  
        }else{
            console.log(keyinput)
            const updated= {...keyinput,isChecked:false,id:state.users.length+1}
            console.log(state)
            setState({...state,users:[...state.users,updated]})

          setKeyinput({name:"",age:"",phone:""})
            console.log(state.users)
        }
        e.preventDefault()

    }
    return ( 
        <div className="App-input">
           <form className="userForm">
           <input type='text' name="name" value={keyinput.name} onChange={handleChange} placeholder="name"/>
           <input type='number' name="age" value={keyinput.age} onChange={handleChange} placeholder="age"/>
           <input type='number' name="phone" value={keyinput.phone} onChange={handleChange} placeholder="phone no"/>
           <button onClick={handleSubmit}>Add</button>
           </form>
        </div>
     );
}
 
export default Adduser;