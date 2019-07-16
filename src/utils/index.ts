interface IProps {
  name: string;
}

export const count = (num: string): string => {
  const a: IProps['name'] = '123';
  return `${num}sddddddd` + a;
};
