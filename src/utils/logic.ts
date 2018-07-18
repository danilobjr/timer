export const not = (x: any) => !x;

export const when = <T, R>(test: (value: T) => boolean) => (transform: (value: T) => R) => (value: T) => {
  if (test(value)) {
    return transform(value);
  }

  return value;
};
