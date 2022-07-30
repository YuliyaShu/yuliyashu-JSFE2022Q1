interface ElementOptionsInterface {
  type: keyof HTMLElementTagNameMap;
  className?: string[];
  innerText?: string;
  appendType?: 'append' | 'prepend' | 'after';
  attributes?: [attr: string, name: string][];
}

export default ElementOptionsInterface;
