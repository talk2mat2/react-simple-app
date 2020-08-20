import React from 'react';
import './footerstyle.css'
import Updatedfoot from '../../hoc'

const Footer = ({name,id}) => {
    const{age,position}=id
    return (  <footer>
       <p>{age}</p>
       <p>{name}</p>
       <p>{position}</p>
      
    </footer>);
}
 
export default Updatedfoot(Footer);