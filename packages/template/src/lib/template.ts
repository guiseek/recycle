import { Constructor, TagsByMap, ElementByTag, ElementFn } from './interfaces';
import { createElement, determineMap } from './utilities';

export const template = <K extends TagsByMap<'html'>>(
  tagFac: K | ElementFn<K> | Constructor<ElementByTag<K>>,
  attrs: Partial<ElementByTag<K>>,
  ...nodes: Node[]
) => {
  let component: Element;

  if (typeof tagFac === 'string') {
    const map = determineMap(tagFac);
    component = createElement(map, tagFac);
  } else {
    try {
      component = new (tagFac as Constructor<ElementByTag<K>>)(attrs);
    } catch {
      component = (tagFac as ElementFn<K>)(attrs);
    }
  }

  component.append(
    ...nodes.flatMap((node) =>
      typeof node === 'string' ? new Text(node) : node
    )
  );

  return Object.assign(component, attrs);
};
