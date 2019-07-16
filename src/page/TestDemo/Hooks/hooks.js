import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const rootElement = document.getElementById('root');

let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function render() {
  cursor = 0;
  ReactDOM.render(<App />, rootElement);
}
render();

function useState(initialValue) {
  memoizedState[cursor] = memoizedState[cursor] || initialValue;
  const currentCursor = cursor;
  function setState(newState) {
    memoizedState[currentCursor] = newState;
    render();
  }
  return [memoizedState[cursor++], setState]; // 返回当前 state，并把 cursor 加 1
}

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[cursor];
  console.log(cursor, deps);
  const hasChangedDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true;
  console.log(hasChangedDeps);
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[cursor] = depArray;
  }
  cursor++;
}

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('fan');
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  // useEffect(() => {
  //   console.log(username);
  // }, [username]);
  // let $count = 0;
  // console.log($count);
  // console.log('render app', count);
  useEffect(() => {
    // const timer = setInterval(() => {
    // $count++;
    // console.log(count);
    // setCount(count + 1);
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
          setUsername(username + ' hello');
        }}>
        点击
      </Button>
      <div>{username}</div>
      <Button
        onClick={() => {
          setUsername(username + ' hello');
        }}>
        点击
      </Button>
    </div>
  );
}
