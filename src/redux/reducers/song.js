import { GET_SONGS } from "../actions";

const initialState = {
  results: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
