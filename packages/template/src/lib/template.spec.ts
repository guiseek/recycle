import { template } from './template';

class Input extends HTMLInputElement {}
customElements.define('test-input', Input, { extends: 'input' });

describe('template', () => {
  it('should work', () => {
    expect(template('span', {})).toBeInstanceOf(HTMLSpanElement);
  });

  it('should input work', () => {
    expect(template(Input, {})).toBeInstanceOf(Input);
  });
});
