const initialState = 0;

const countDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
};

export default countDataReducer;
