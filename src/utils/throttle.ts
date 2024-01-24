export const throttle = (fn: Function, limit: number) => {
  let inThrottle = false;

  return function (this: unknown) {
    if (!inThrottle) {
      inThrottle = true;
      fn.apply(this, arguments);
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
