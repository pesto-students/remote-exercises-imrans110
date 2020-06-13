function cacheFunction(cb) {
  const cachedValues = {};
  return (args) => {
    if (args in cachedValues) {
      return cachedValues[args];
    } else {
      cachedValues[args] = cb(args);
      return cachedValues[args];
    }
  };
}

export { cacheFunction };
