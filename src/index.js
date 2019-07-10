import reactDOM from 'react-dom';
import React from 'react';
// eslint-disable-next-line
import { hot } from 'react-hot-loader/root';
import Header from './page/Header';
import Body from './page/Body';

const App = () => (
  <div>
    <Header name="你好2ddd12ddddd1231" />
    <Body />
  </div>
);

const HotApp = hot(App);

reactDOM.render(<HotApp />, document.querySelector('#root'));
