import React, { Component } from "react";


const Updatedfoot = (Wrappedcomponents) => {
  class Updatedfoot extends Component {
    state = {};
    render() {
      return <Wrappedcomponents name={"martins jones"} id={{position:"user",age:55}}/>;
    }
  }
  return Updatedfoot;
};

export default Updatedfoot;
