type FuncType = (value: void) => void | PromiseLike<void>;

export const queueMicrotask = function (fn: FuncType) {
  Promise.resolve()
    .then(fn)
    .catch((err) =>
      setTimeout(() => {
        throw new Error(err);
      })
    );
};
