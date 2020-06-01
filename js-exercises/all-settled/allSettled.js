const FULFILLED = "fulfilled";
const REJECTED = "rejected";

const allSettled = async (promiseArray) => {
  const fullFilledPromises = await promiseArray.reduce(
    (accumulator, currrentPromise) => {
      return accumulator.then((results) => {
        return Promise.resolve(currrentPromise)
          .then((result) => {
            return [...results, { status: FULFILLED, value: result }];
          })
          .catch((result) => {
            return [
              ...results,
              {
                status: REJECTED,
                value: result instanceof Error ? result.message : result,
              },
            ];
          });
      });
    },
    Promise.resolve([])
  );

  return fullFilledPromises;
};

export { allSettled };
