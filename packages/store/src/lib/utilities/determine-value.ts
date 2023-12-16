import type { Primitive } from '../interfaces';

export function determineValue<T extends Primitive>(value: T): T | null {
  if (!isNaN(+value)) return +value as T;
  if (!isNaN(new Date(value).getTime())) return new Date(value) as T;
  if (typeof value === 'string') return value as T;
  return null;
}
