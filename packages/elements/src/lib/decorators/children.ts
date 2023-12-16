import { CustomElementTarget } from '../interfaces';
import { noop } from '../utilities';

export const enum Show {
  element = 0x1,
  attribute = 0x2,
  text = 0x4,
  entity = 0x20,
  comment = 0x80,
  all = 0xffffffff,
}

export function children(el: CustomElementConstructor, filter = Show.element) {
  return function <T extends CustomElementTarget>(
    target: T,
    property: keyof T
  ) {
    const connected = target.connectedCallback ?? noop;

    target.connectedCallback = function (this) {
      const walker = document.createTreeWalker(this, filter);

      const nodes: Node[] = [];

      while (walker.nextNode()) {
        console.log(walker.currentNode.constructor.name);

        if (walker.currentNode.constructor.name === el.name) {
          nodes.push(walker.currentNode);
        }
      }

      target[property] = nodes as T[keyof T];
      connected.call(this);
    };
  };
}
