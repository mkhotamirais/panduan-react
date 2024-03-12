import React from "react";
import PropTypes from "prop-types";
export class EdwReactClass1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handlePlus() {
    this.setState({ value: this.state.value + 1 });
  }
  handleMinus() {
    this.state.value > 0 ? this.setState({ value: this.state.value - 1 }) : null;
  }
  render() {
    return (
      <div className="border p-2 rounded">
        <h1>Class component, hello {this.props.nama}</h1>
        <p>value: {this.state.value}</p>
        <button onClick={this.handlePlus} className="underline mx-1">
          Plus +
        </button>
        <button onClick={this.handleMinus} className="underline mx-1">
          Minus -
        </button>
      </div>
    );
  }
}
EdwReactClass1.propTypes;

export class EdwReactClass2 extends React.Component {
  state = { value: 0 };
  handlePlus() {
    this.setState({ value: this.state.value + 1 });
  }
  handleMinus() {
    this.state.value > 0 ? this.setState({ value: this.state.value - 1 }) : null;
  }
  render() {
    return (
      <div className="border p-2 rounded">
        <h1>Class component, hello {this.props.nama}</h1>
        <p>value: {this.state.value}</p>
        <button onClick={this.handlePlus} className="underline mx-1">
          Plus +
        </button>
        <button onClick={this.handleMinus} className="underline mx-1">
          Minus -
        </button>
      </div>
    );
  }
}
EdwReactClass2.propTypes = {
  nama: PropTypes.string.isRequired,
};
