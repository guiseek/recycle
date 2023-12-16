import type { TypedValue } from '../interfaces';

export function determineResult<T extends object>(
  initialValue: T,
  values: Record<string, unknown>
) {
  const result = Array.isArray(initialValue) ? Object.values(values) : values;
  return result as TypedValue<T>;
}
