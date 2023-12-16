export function determinePrimitive<T>(value: T) {
  const isDate = value instanceof Date;
  const isString = typeof value === 'string';
  const isNumber = typeof value === 'number';
  const isObject = typeof value === 'object';
  const isValue = isDate || isString || isNumber;
  return !(!isValue && isObject);
}
