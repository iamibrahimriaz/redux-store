// Initial state
const initialState = {
  count: 0,
  // Initialize other state properties here
};

// Root reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log({state})
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    // Handle other action types here
    default:
      return state;
  }
};

export default rootReducer;
