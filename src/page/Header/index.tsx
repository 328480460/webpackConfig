import React, { PureComponent } from 'react';
import { cloneDeep } from 'lodash';
import { count } from '../../utils';

interface IProps {
  name: string;
}

export default class Header extends PureComponent<IProps> {
  public static defaultProps;
  public render(): JSX.Element {
    const { name } = this.props;
    const res = count(name);
    const obj = { name: 'wqeqw' };
    const cloneObj = cloneDeep(obj);
    return (
      <header>
        {res}
        {cloneObj.name}
        <img src={require('@assets/test.png')} alt="logo" />
      </header>
    );
  }
}

Header.defaultProps = {
  name: 'header'
};
