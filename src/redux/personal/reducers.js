const initialState = {
	familyCount: 0,
	friendsCount: 0,
	relativesCount: 0,
  };
  
  const personalReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'INCREMENT_FAMILY_COUNT':
		console.log('Inc Family', state)
		return { ...state, familyCount: state.familyCount + 1 };
	  case 'DECREMENT_FAMILY_COUNT':
		return { ...state, familyCount: state.familyCount - 1 };
	  case 'INCREMENT_FRIENDS_COUNT':
		console.log('Inc Friends', state)
		return { ...state, friendsCount: state.friendsCount + 1 };
	  case 'DECREMENT_FRIENDS_COUNT':
		return { ...state, friendsCount: state.friendsCount - 1 };
	  case 'INCREMENT_RELATIVES_COUNT':
		return { ...state, relativesCount: state.relativesCount + 1 };
	  case 'DECREMENT_RELATIVES_COUNT':
		return { ...state, relativesCount: state.relativesCount - 1 };
	  default:
		return state;
	}
  };
  
  export default personalReducer;
  