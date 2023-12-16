import { Cancel, Payload } from './interfaces';

export class Broadcast<T extends object> {
  static UUID = crypto.randomUUID();

  #listeners = new Map();

  #channel;

  constructor(name: string) {
    this.#channel = new BroadcastChannel(name);

    this.#channel.onmessage = <K extends keyof T>(
      ev: MessageEvent<Payload<T[K]>>
    ) => {
      if (ev.data.uuid !== Broadcast.UUID) {
        this.#dispatch(ev.data.event as K, ev.data.value);
      }
    };
  }

  on = <K extends keyof T>(event: K, fn: (value: T[K]) => void): Cancel => {
    const fns = this.#listeners.get(event) ?? [];

    this.#listeners.set(event, [...fns, fn]);
    const cancel = () => this.#listeners.delete(event);

    return { cancel };
  };

  emit = <K extends keyof T>(event: K, value: T[K]) => {
    const uuid = Broadcast.UUID;
    this.#channel.postMessage({ event, value, uuid });
  };

  #dispatch = <K extends keyof T>(event: K, value: T[K]) => {
    const fns = this.#listeners.get(event) ?? [];

    for (const fn of fns) fn(value);
  };
}
