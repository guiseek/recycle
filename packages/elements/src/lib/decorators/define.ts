import type { CustomElementBase } from '../interfaces';
import { hookAdapter } from '../utilities';

export const define = (
  name: `${string}-${string}`,
  mode: ShadowRootMode = 'open'
) => {
  return <T extends CustomElementConstructor>(target: T) => {
    hookAdapter(target, {
      async connected(instance: CustomElementBase) {
        if (instance.render) {
          if (!instance.shadowRoot?.isConnected) {
            instance.shadow = instance.attachShadow({ mode });
            instance.shadow.append(await instance.render());
          }
        }
      },
      async attributeChanged(instance: CustomElementBase) {
        if (instance.render) {
          if (instance.shadowRoot && instance.shadowRoot.firstChild) {
            instance.shadowRoot.replaceChild(
              instance.shadowRoot.firstChild,
              await instance.render()
            );
          }
        }
      },
    });

    customElements.define(name, target);
  };
};
