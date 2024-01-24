export const makeCancelable = <T = unknown>(promise: Promise<T>) => {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => (isCanceled ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (isCanceled ? reject({ isCanceled: true }) : reject(error))
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
};

// Usage
const somePromise = new Promise<number>((r) => setTimeout(r, 1000, 666));
const cancelable = makeCancelable<number>(somePromise);
cancelable.promise
  .then(() => console.log("resolved"))
  .catch(({ isCanceled, ...error }) => console.log("isCanceled", isCanceled));
cancelable.cancel();
