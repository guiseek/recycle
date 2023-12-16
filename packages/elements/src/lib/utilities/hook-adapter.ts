import {
  CustomElement,
  CustomElementBase,
  CustomElementType,
  HookAdapterOptions,
} from '../interfaces';
import { noop } from './noop';

export const hookAdapter = <T extends CustomElementBase>(
  target: CustomElement<T> | CustomElementType<T>,
  config: HookAdapterOptions<T> = {}
) => {
  const hook = {
    connected: target.prototype.connectedCallback ?? noop,
    disconnected: target.prototype.disconnectedCallback ?? noop,
    attributeChanged: target.prototype.attributeChangedCallback ?? noop,
  };

  /**
   * Connected Callbback
   */
  target.prototype.connectedCallback = function (this: T) {
    // Util
    if (this.beforeConnect) {
      this.beforeConnect();
    }

    // Adapter
    if (config.connected) {
      config.connected(this);
    }

    // Original adapter
    if (this.connected) {
      this.connected();
    }

    // Original
    hook.connected.call(this);

    // Util
    if (this.afterConnect) {
      this.afterConnect();
    }
  };

  /**
   * Attribute Changed Callback
   */
  target.prototype.attributeChangedCallback = function (
    this: T,
    name: string,
    prev: string | null,
    next: string | null
  ) {
    // Adapter
    if (config.attributeChanged) {
      config.attributeChanged(this, { name, prev, next });
    }

    // Original adapter
    if (this.attributeChanged) {
      this.attributeChanged({ name, prev, next });
    }

    // Original
    hook.attributeChanged(name, prev, next);
  };

  /**
   * Disconnected Callback
   */
  target.prototype.disconnectedCallback = function (this: T) {
    // Util
    if (this.beforeDisconnect) {
      this.beforeDisconnect();
    }

    // Adapter
    if (config.disconnected) {
      config.disconnected(this);
    }

    // Original adapter
    if (this.disconnected) {
      this.disconnected();
    }

    // Original
    hook.disconnected.call(this);

    // Util
    if (this.afterDisconnect) {
      this.afterDisconnect();
    }
  };
};
