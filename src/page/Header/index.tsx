import React, { PureComponent } from 'react';
import { cloneDeep } from 'lodash';
import { count } from '../../utils';

interface IProps {
  name: string;
}

export default class Header extends PureComponent<IProps> {
  static defaultProps;
  render() {
    const { name } = this.props;
    const res = count(name);
    const obj = { name: '老张' };
    const cloneObj = cloneDeep(obj);
    return (
      <header>
        {res}
        {cloneObj.name}
        <img src={require('@assets/test.png')} />
      </header>
    );
  }
}

Header.defaultProps = {
  name: 'header'
};
