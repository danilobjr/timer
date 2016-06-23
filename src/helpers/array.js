export const map = (func) => (array) => array.reduce((accu, curr) => accu.concat(func(curr)), [])

export const range = (from) => (to) => new Array(to).join(',').split(',').map((item, index) => index)

export const splitAt = (atIndex) => (array) => [array.slice(0, atIndex), array.slice(atIndex)]

export const reverse = (array) => [...array].reverse()

export const flatten = (array) => array.reduce((accu, curr) => accu.concat(curr), [])

export const last = (array) => [...array][array.length - 1]

export const all = (predicate) => (array) => array.every(predicate)

export const join = (character) => (array) => array.join(character)

export const head = (array) => [...array].shift()

export const prepend = value => array => [value, ...array];

export const zipWith = func => firstArray => secondArray => {
    const result = [];

    for (var i = 0; i < firstArray.length; i++) {
        result.push(func(firstArray[i], secondArray[i]));        
    }

    return result;
}

export const aperture = howMany => array => {
    const result = [];

    for (var i = 0; i <= array.length - howMany; i++) {
        result.push([...array].splice(i, howMany));        
    }

    return result;
}