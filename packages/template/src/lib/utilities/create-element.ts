import type { ElementMap, TagsByMap } from '../interfaces';

const namespace = {
  html: 'http://www.w3.org/1999/xhtml',
  svg: 'http://www.w3.org/2000/svg',
  mathML: 'http://www.w3.org/1998/Math/MathML',
};

export function createElement<
  Type extends ElementMap,
  Tag extends TagsByMap<Type> & string
>(type: Type, tag: Tag, options?: ElementCreationOptions) {
  switch (type) {
    case 'html':
      return document.createElementNS(namespace.html, tag, options);
    case 'svg':
      return document.createElementNS(namespace.svg, tag, options);
    case 'mathML':
      return document.createElementNS(namespace.mathML, tag, options);
    case 'custom':
    default:
      return document.createElement(tag, options);
  }
}
