export const compose = (...functions) => (value) =>
    functions.reduceRight((accu, curr) => curr(accu), value)