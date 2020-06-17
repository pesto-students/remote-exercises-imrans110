const allPromises = (promiseIterable) =>
  new Promise((resolve, reject) => {
    const settledPromises = [];
    for (const P of promiseIterable) {
      Promise.resolve(P)
        .then((res) => {
          settledPromises.push(res);
          if (settledPromises.length === promiseIterable.length) {
            resolve(settledPromises);
          }
        })
        .catch((e) => reject(new Error(e)));
    }
  });

export { allPromises };
