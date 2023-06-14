// rootReducer.js
const initialState = {
  greetings: {
    greeting: '', // Initialize the greeting property
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_GREETING':
      return {
        ...state,
        greetings: {
          ...state.greetings,
          greeting: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
