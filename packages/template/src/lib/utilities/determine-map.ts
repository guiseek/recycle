import type { ElementMap } from '../interfaces';
import { html, mathML, svg } from '../maps';

export function determineMap(tag: string): ElementMap {
  if (Object.keys(html).includes(tag)) return 'html';
  if (Object.keys(svg).includes(tag)) return 'svg';
  if (Object.keys(mathML).includes(tag)) return 'mathML';
  return 'custom';
}
