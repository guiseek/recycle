import { determinePrimitive, determineResult } from './utilities';
import { Value } from './value';

export function store<T extends object>(initialValue: T) {
  const values = {} as Record<string, unknown>;

  for (const [key, value] of Object.entries(initialValue)) {
    values[key] = determinePrimitive(value) ? new Value(value) : store(value);
  }

  return determineResult(initialValue, values);
}
