import * as ways from "./ActionTypes";

const initialState = {
  products: [],
  single: {},
  cart: [],
  Qty: 1,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_DATA_SUCCESS:
      return { ...state, products: payload };
    case ways.GET_SINGLE_SUCCESS:
      return { ...state, single: payload };
    case ways.ADD_SINGLE_SUCCESS:
      return { ...state, cart: payload };
    case ways.ADD_QTY_SUCCESS:
      return { ...state, Qty: payload };
    default:
      return state;
  }
}

export { Reducer };
