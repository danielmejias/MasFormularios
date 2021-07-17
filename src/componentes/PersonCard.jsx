import React from "react";
import "../App.css";

class PersonCard extends React.Component {
  render() {
    const { lastName, firstName, age, hairColor } = this.props;
    return (
      <div >
        <ol>
          <h1>
            {lastName},{firstName}
          </h1>
        </ol>
        <ol> Age: {age} </ol>     
        <ol> Hair color: {hairColor} </ol>  
      </div>
    );
  }
}
export default PersonCard;
