import { CustomElementTarget } from '../interfaces';
import { noop } from '../utilities';
import { Show } from '../enums';

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
