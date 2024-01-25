export const numbersInRange = (
  num1: number,
  num2: number,
  rangeStart: number,
  rangeEnd: number,
  newStyle: string,
  defaultStyle: string,
) =>
  num1 >= rangeStart &&
  num1 <= rangeEnd &&
  num2 >= rangeStart &&
  num2 <= rangeEnd
    ? newStyle
    : defaultStyle;
