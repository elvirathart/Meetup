import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { increment } from '../../store/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <p>{count}</p>
      <button className={'counter-button'} onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
