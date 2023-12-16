export const Attr = {
  assign<T extends HTMLElement>(el: T, attrs: Partial<T>) {
    return Object.assign(el, attrs);
  },
};
