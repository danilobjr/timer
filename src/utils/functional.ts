export const compose = (...functions: Function[]) => (value: any) =>
  functions.reduceRight((accu, curr) => curr(accu), value);

export const log = (label: string = 'LOG') => (x: any) => {
  // tslint:disable-next-line:no-console
  console.log(label, x);
  return x;
};
