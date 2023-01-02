interface ElementOptionsInterface {
  type: string;
  className?: string[];
  innerText?: string;
  appendType?: 'append' | 'prepend' | 'after';
  attributes?: [attr: string, name: string][];
}

export default ElementOptionsInterface;

