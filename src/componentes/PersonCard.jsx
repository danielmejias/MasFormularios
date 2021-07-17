import React from "react";
import "../App.css";

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  onclick(type) {
    this.setState((prevState) => {
      return {
        count: type === "add" ? prevState.count + 1 : prevState.count - 1,
      };
    });
  }
  render() {
    const { lastName, firstName, age, hairColor } = this.props;
    return (
      <div>
        <ol>
          <h1>
            {lastName},{firstName}
          </h1>
        </ol>
        <ol> Age: {this.state.count} </ol>     
        <ol> Hair color: {hairColor} </ol>
        <ol>
          <input
            type="button"
            onClick={this.onclick.bind(this, "add")}
            value="Birthday button of"
          />
        </ol>
      </div>
    );
  }
}
export default PersonCard;
