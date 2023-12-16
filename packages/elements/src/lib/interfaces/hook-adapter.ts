import type {
  CustomElementBase,
  CustomElementType,
  AttributeChangedOptions,
} from './elements';

export interface HookAdapterOptions<T extends CustomElementBase> {
  connected?(instance: InstanceType<CustomElementType<T>>): void;
  attributeChanged?(
    instance: InstanceType<CustomElementType<T>>,
    value: AttributeChangedOptions
  ): void;
  disconnected?(instance: InstanceType<CustomElementType<T>>): void;
}
