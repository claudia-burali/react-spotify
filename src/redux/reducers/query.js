import { QUERY_USER } from "../actions";

const initialState = {
  content: "",
};
const queryUser = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_USER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default queryUser;
