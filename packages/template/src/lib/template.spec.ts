import { template } from './template';

describe('template', () => {
  it('should work', () => {
    expect(template('span', {})).toBeInstanceOf(HTMLSpanElement);
  });
});
