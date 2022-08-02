interface ElementOptionsInterface {
  type: keyof HTMLElementTagNameMap | 'svg' | 'path';
  className?: string[];
  innerText?: string;
  appendType?: 'append' | 'prepend' | 'after';
  attributes?: [attr: string, name: string][];
}

export default ElementOptionsInterface;
