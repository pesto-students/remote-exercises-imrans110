import React, { Component } from "react";

const withState = (stateName, stateHandler, initialState) => (
  BaseComponent
) => {
  class WithState extends Component {
    state = { stateValue: initialState };

    updateStateValue = (updateFn, callback) =>
      this.setState(
        ({ stateValue }) => ({
          stateValue: updateFn(stateValue),
        }),
        callback
      );

    render() {
      return (
        <BaseComponent
          {...this.props}
          {...{ [stateName]: this.state.stateValue }}
          {...{ [stateHandler]: this.updateStateValue }}
        />
      );
    }
  }
  return WithState;
};
export default withState;
