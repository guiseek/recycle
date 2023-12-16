import { define } from '../decorators';
import { Attr } from './attr';

@define('test-element')
export class TestElement extends HTMLElement {}

describe('Attr assign', () => {
  let element: TestElement;

  beforeEach(() => {
    element = new TestElement();
  });

  it('id attr should be empty', () => {
    expect(element.id).toBe('');
  });

  it('id attr should be test-id', async () => {
    Attr.assign<TestElement>(element, { id: 'test-id' });

    expect(element.id).toBe('test-id');
  });
});
