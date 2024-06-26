// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount, incrementCountAsync } from './redux/count/actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
      <button onClick={() => dispatch(incrementCountAsync())}>Increment Async</button>
    </div>
  );
};

export default Counter;
