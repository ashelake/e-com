import * as ways from "./ActionTypes";
const initialState = {
  isAuth: false,
  user: {},
};
function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: payload.isAdmin,
        user: payload,
      };

    default:
      return state;
  }
}

export { Reducer };
