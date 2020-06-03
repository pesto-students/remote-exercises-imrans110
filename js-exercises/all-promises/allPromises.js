const allPromises = async (args) =>
  args.reduce(
    (accumulator, currrentPromise) =>
      accumulator.then((results) =>
        Promise.resolve(currrentPromise).then((result) => [...results, result])
      ),
    Promise.resolve([])
  );

export { allPromises };
