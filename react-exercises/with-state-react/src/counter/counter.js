import React from "react";

import withState from "../with-state/withState";

const enhance = withState("counter", "setCounter", 0);

const Counter = enhance(({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter((n) => n + 1)}>Increment</button>
    <button onClick={() => setCounter((n) => n - 1)}>Decrement</button>
  </div>
));

export default Counter;
