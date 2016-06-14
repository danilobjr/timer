export const values = object => {
    const result = [];

    for (var key in object) {
        result.push(object[key]);
    }

    return result;
}

export const omit = props => object => {
    const result = {};

    for (var key in object) {
        if (!props.includes(key)) {
            result[key] = object[key];
        }
    }

    return result;
}