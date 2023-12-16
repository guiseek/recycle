/**
 * Custom Element Types
 */
export interface ConnectedCallback {
  connectedCallback(): void;
}

export interface DisconnectedCallback {
  disconnectedCallback(): void;
}

export interface AttributeChangedCallback {
  attributeChangedCallback(
    name: string,
    prev: string | null,
    next: string | null
  ): void;
}

export interface Connected {
  connected(): void;
}

export interface BeforeConnect {
  beforeConnect(): void;
}

export interface AfterConnect {
  afterConnect(): void;
}

export interface Disconnected {
  disconnected(): void;
}

export interface BeforeDisconnect {
  beforeDisconnect(): void;
}

export interface AfterDisconnect {
  afterDisconnect(): void;
}

export interface AttributeChangedOptions<
  T extends Record<string, unknown> = Record<string, unknown>,
  K extends keyof T = keyof T
> {
  name: K;
  prev: T[K] | null;
  next: T[K] | null;
}

export interface AttributeChanged<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  attributeChanged(options: AttributeChangedOptions<T>): void;
}

export interface CustomElementHookNameMap
  extends Connected,
    Disconnected,
    AttributeChanged {}

export interface Render {
  shadow: ShadowRoot;
  render(): Node;
}

export type CustomSelector = `${string}-${string}`;

export interface RenderCallback {
  shadow: ShadowRoot;
  render(): Node;
}

export interface CustomElementBase
  extends HTMLElement,
    RenderCallback,
    Partial<BeforeConnect>,
    Partial<BeforeConnect>,
    Partial<Connected>,
    Partial<AfterConnect>,
    Partial<BeforeDisconnect>,
    Partial<Disconnected>,
    Partial<AfterDisconnect>,
    Partial<AttributeChanged>,
    Partial<ConnectedCallback>,
    Partial<DisconnectedCallback>,
    Partial<AttributeChangedCallback> {
  render(): Promise<Node>;
  render(): Node;
}

export type CustomElementTarget = HTMLElement & Partial<CustomElementBase>;

export interface CustomElement<T> extends CustomElementConstructor {
  new (...params: unknown[]): T & CustomElementBase;
  prototype: T & CustomElementBase;
}

export interface CustomElementType<T extends HTMLElement>
  extends CustomElementConstructor {
  new (...params: unknown[]): T | CustomElementBase;
  prototype: T | CustomElementBase;
}

export interface Callback<T> {
  (value: T): void;
}
