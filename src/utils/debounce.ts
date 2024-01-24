export const debounce = (fn: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: unknown) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
};
