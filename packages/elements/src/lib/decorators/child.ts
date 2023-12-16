import { CustomElementTarget } from '../interfaces';
import { noop } from '../utilities';

export function child(el: CustomElementConstructor) {
  return <T extends CustomElementTarget>(target: T, property: keyof T) => {
    const connected = target.connectedCallback ?? noop;

    target.connectedCallback = function (this: T) {
      const walker = document.createTreeWalker(this, 0x1);

      while (walker.nextNode()) {
        if (walker.currentNode.constructor.name === el.name) {
          return (target[property] = walker.currentNode as T[keyof T]);
        }
      }

      return connected.call(this);
    };
  };
}
