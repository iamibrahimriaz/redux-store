import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementFamilyCount,
  decrementFriendsCount,
  decrementRelativesCount,
  incrementFamilyCount,
  incrementFriendsCount,
  incrementRelativesCount,
} from './redux/personal/actions';
import {
  getFamilyCount,
  getFriendsCount,
  getRelativesCount,
} from './redux/personal/selectors';

const Personal = () => {
  const familyCount = useSelector(getFamilyCount);
  const friendsCount = useSelector(getFriendsCount);
  const relativesCount = useSelector(getRelativesCount);
  
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Personal</h2>
      <div>
        <h3>Family Count: {familyCount}</h3>
        <button onClick={() => dispatch(incrementFamilyCount())}>Increment</button>
        <button onClick={() => dispatch(decrementFamilyCount())}>Decrement</button>
      </div>
      <div>
        <h3>Friends Count: {friendsCount}</h3>
        <button onClick={() => dispatch(incrementFriendsCount())}>Increment</button>
        <button onClick={() => dispatch(decrementFriendsCount())}>Decrement</button>
      </div>
      <div>
        <h3>Relatives Count: {relativesCount}</h3>
        <button onClick={() => dispatch(incrementRelativesCount())}>Increment</button>
        <button onClick={() => dispatch(decrementRelativesCount())}>Decrement</button>
      </div>
    </div>
  );
};

export default Personal;
