import { TypedValue } from './interfaces';
import { store } from './store';
import { Value } from './value';

interface Person {
  name: string;
  age: number;
  birthday: Date;
  children: Person[];
}

describe('store', () => {
  let state: TypedValue<Person>;

  beforeEach(() => {
    state = store<Person>({
      name: 'Gui',
      age: 37,
      birthday: new Date('12-29-1986'),
      children: [
        {
          name: 'Guizin',
          age: 0,
          birthday: new Date(),
          children: [],
        },
      ],
    });
  });

  it('name should be a instance of value', () => {
    expect(state.name).toBeInstanceOf(Value);
  });

  it('age should be a instance of value', () => {
    expect(state.age).toBeInstanceOf(Value);
  });

  it('birthday should be a instance of value', () => {
    expect(state.birthday).toBeInstanceOf(Value);
  });

  it('children name should be a instance of value', () => {
    expect(state.children[0].name).toBeInstanceOf(Value);
  });

  it('children age should be a instance of value', () => {
    expect(state.children[0].age).toBeInstanceOf(Value);
  });

  it('children birthday should be a instance of value', () => {
    expect(state.children[0].birthday).toBeInstanceOf(Value);
  });

  it('name value should be a string', () => {
    expect(typeof state.name.value).toBe('string');
  });

  it('name value should be Gui', () => {
    expect(state.name.value).toBe('Gui');
  });

  it('name value should be Lu', () => {
    state.name.set('Lu');
    expect(state.name.value).toBe('Lu');
  });

  it('age should be a number', () => {
    expect(typeof state.age.value).toBe('number');
  });

  it('age should be 37', () => {
    expect(state.age.value).toBe(37);
  });

  it('birthday should be a date', () => {
    expect(state.birthday.value).toBeInstanceOf(Date);
  });

  it('children name should be a string', () => {
    expect(typeof state.children[0].name.value).toBe('string');
  });

  it('children age should be a number', () => {
    expect(typeof state.children[0].age.value).toBe('number');
  });

  it('children birthday should be a date', () => {
    expect(state.children[0].birthday.value).toBeInstanceOf(Date);
  });
});
