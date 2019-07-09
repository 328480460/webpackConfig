import React from 'react';
import { cloneDeep } from 'lodash';
import style from './index.less';
import { count } from '../../utils';

const obj = { age: '你好' };

const cloneObj = cloneDeep(obj);

const Body = () => (
  <section className={style.content}>
    {count('哈哈哈123123123123')}
    {cloneObj.age}
  </section>
);

export default Body;
