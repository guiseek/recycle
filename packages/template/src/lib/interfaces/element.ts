export interface CustomElementTagNameMap {}

export type Customs = CustomElementTagNameMap;
export type CustomByTag<K extends keyof Customs> = Customs[K];

export type HTMLs = HTMLElementTagNameMap;
export type SVGs = SVGElementTagNameMap;
export type MathMLs = MathMLElementTagNameMap;

export type Tags = keyof (HTMLs & SVGs & MathMLs & Customs);

export type HTMLByTag<K extends keyof HTMLs> = HTMLs[K];
export type SVGByTag<K extends keyof SVGs> = SVGs[K];
export type MathMLByTag<K extends keyof MathMLs> = MathMLs[K];

export type ElementByTag<K extends Tags> = K extends keyof HTMLs
  ? HTMLByTag<K>
  : K extends keyof SVGs
  ? SVGByTag<K>
  : K extends keyof MathMLs
  ? MathMLByTag<K>
  : Element;

export type ElementMap = 'html' | 'svg' | 'mathML' | 'custom';

export type TagsByMap<K extends ElementMap> = K extends 'html'
  ? keyof HTMLs
  : K extends 'svg'
  ? keyof SVGs
  : K extends 'mathML'
  ? keyof MathMLs
  : K extends 'customs'
  ? keyof Customs
  : keyof Tags;

export type Constructor<T> = new (...args: unknown[]) => T;

export type ElementFn<K extends Tags> = (props: object) => ElementByTag<K>;
