const limitFunctionCallCount = (cb, invokeLimit = 0) => {
  let invokeCount = 0;
  return (...args) => {
    if (invokeCount < invokeLimit) {
      invokeCount++;
      return cb(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
