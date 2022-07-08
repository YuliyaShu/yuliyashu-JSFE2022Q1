interface ElementOptionsInterface {
  type: string;
  className?: string[] | string;
  innerText?: string;
  appendType?: 'append' | 'prepend';
  attributes?: [attr: string, name: string][];
}

export default ElementOptionsInterface;

