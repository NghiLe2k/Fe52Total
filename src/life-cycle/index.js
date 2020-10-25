import React, { Component } from "react";
import Child from "./child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor - chay 1 lan duy nhat");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount - chay 1 lan duy nhat");
  }

  componentDidMount() {
    /**
     * goi api, nhiều thứ quan trọng khác
     */
    console.log("componentDidMount - chay 1 lan duy nhat");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate - Chay khi state thay doi");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - Chay khi state thay doi");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState.number === 3) {
      return false;
    }
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log("render - Chay lai khi state thay doi");
    return (
      <div>
        <h3>LifeCycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Tang so
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }
}
