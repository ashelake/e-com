import axios from "axios";
import * as type from "./ActionTypes";

const isDataSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};
const isSingleSuccess = (payload) => {
  return {
    type: type.GET_SINGLE_SUCCESS,
    payload: payload,
  };
};
const isaddSuccess = (payload) => {
  return {
    type: type.ADD_SINGLE_SUCCESS,
    payload: payload,
  };
};
export const getProducts = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/products/getdata")
    .then(({ data }) => {
      return dispatch(isDataSuccess(data));
    })
    .catch((err) => {
      // dispatch(isDataLodingFailed);
    });
};

export const getSingleProducts = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:8080/products/getadata/${id}`)
    .then(({ data }) => {
      return dispatch(isSingleSuccess(data));
    });
};

export const addtocart = (payload) => (dispatch) => {
  return axios
    .post(`http://localhost:8080/products/add-to-cart`, payload)
    .then(({ data }) => {
      console.log(data);
      return dispatch(isaddSuccess(data));
    });
};
export const addQty = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8080/products/increase-cart", payload)
    .then((res) => {
      return {
        type: type.ADD_QTY_SUCCESS,
        payload: payload.length++,
      };
    });
};
