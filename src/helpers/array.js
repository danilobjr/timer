export const map = (func) => (array) => array.reduce((accu, curr) => accu.concat(func(curr)), [])

export const range = (from) => (to) => new Array(to).join(',').split(',').map((item, index) => index)

export const splitAt = (atIndex) => (array) => [array.slice(0, atIndex), array.slice(atIndex)]

export const reverse = (array) => array.reverse()

export const flatten = (array) => array.reduce((accu, curr) => accu.concat(curr), [])