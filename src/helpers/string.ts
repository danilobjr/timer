export const padLeft = (amount: number) => (value: string) => {
  const needsPad = amount > value.length;
  return (needsPad) ? new Array(amount - value.length + 1).join(' ') + value : value;
}

export const replace = (what: string) => (withh: string) => (value: string) =>
  String(value).replace(what, withh)
