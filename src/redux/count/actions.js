export const incrementCount = () => ({
  type: 'INCREMENT_COUNT',
});

export const decrementCount = () => ({
  type: 'DECREMENT_COUNT',
});

export const incrementCountAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementCount());
    }, 1000);
  };
};
