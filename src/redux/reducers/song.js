import { GET_SONGS } from "../actions";
import { GET_QUEEN_SONGS } from "../actions";
import { GET_PERRY_SONGS } from "../actions";
import { GET_EMINEM_SONGS } from "../actions";

const initialState = {
  results: [],
  resultsQueen: [],
  resultsPerry: [],
  resultsEminem: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_QUEEN_SONGS:
      return {
        ...state,
        resultsQueen: action.payload,
      };
    case GET_PERRY_SONGS:
      return {
        ...state,
        resultsPerry: action.payload,
      };
    case GET_EMINEM_SONGS:
      return {
        ...state,
        resultsEminem: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
