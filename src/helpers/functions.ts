export const compose = (...functions: Function[]) => (value: any) =>
  functions.reduceRight((accu, curr) => curr(accu), value)
