export const padLeft = (amount) => (value) => {
    value = String(value);
    const needsPad = amount > value.length;
    return (needsPad) ? new Array(amount - value.length + 1).join(' ') + value : value;
}

export const replace = (what) => (withh) => (value) => 
    String(value).replace(what, withh)