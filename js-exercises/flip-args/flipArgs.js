function flipArgs(fn) {
  return (...args) => {
    return fn(...args.reverse());
  };
}

export { flipArgs };
