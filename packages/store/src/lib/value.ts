import type { Primitive } from './interfaces';
import { determineValue } from './utilities';

export class Value<T extends Primitive> extends Text {
  constructor(public initialValue: T) {
    super(initialValue.toLocaleString());
  }

  set = (value: T) => {
    this.textContent = value.toLocaleString();
  };

  get value() {
    const { textContent, initialValue } = this;
    const value = textContent ?? initialValue;
    return determineValue<T>(value as T) as T;
  }
}
