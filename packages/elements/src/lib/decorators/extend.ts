import {
  CustomElementBase,
  CustomElementType,
  CustomSelector,
} from '../interfaces';
import { hookAdapter } from '../utilities';

export const extend = <K extends keyof HTMLElementTagNameMap>(
  el: K,
  name: CustomSelector
) => {
  return <T extends HTMLElementTagNameMap[K] & CustomElementBase>(
    target: CustomElementType<T>
  ) => {
    hookAdapter(target);

    customElements.define(name, target, { extends: el });
  };
};
