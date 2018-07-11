import { StringKeyValuePair } from 'helpers';

export const validatePercentageProgressProp = (props: StringKeyValuePair, propName: string, componentName: string) => {
  const percentageValue = props[propName];

  if (percentageValue < 0 || percentageValue > 1) {
    return new Error(
      "Invalid prop '" + propName + "' supplied to" +
      " '" + componentName + "'. Validation failed. " +
      propName + " value must be between 0 and 1."
    );
  }

  return null;
}
