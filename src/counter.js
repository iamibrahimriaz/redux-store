// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync } from './redux/actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
    </div>
  );
};

export default Counter;
