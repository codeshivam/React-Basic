import React from "react";
import Pt from "prop-types";

class Students extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.name} </h1>
        <h1>Age {this.props.age} </h1>
      </div>
    );
  }
}

Students.prototypes = {
  name: Pt.string,
  age: Pt.number
};

export default Students;
