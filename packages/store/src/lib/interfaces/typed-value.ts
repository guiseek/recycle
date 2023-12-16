import type { Primitive } from './primitive';
import { Value } from '../value';

export type DetectValue<T> = T extends Array<infer U>
  ? Array<DetectValue<U>>
  : T extends Primitive
  ? Value<T>
  : T extends object
  ? TypedValue<T>
  : null;

export type TypedValue<T> = {
  [K in keyof T]: DetectValue<T[K]>;
};
