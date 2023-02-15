import axios from "axios";
import * as type from "./ActionTypes";

const isAuthSuccess = (payload) => {
  return {
    type: type.GET_AUTH_SUCCESS,
    payload: payload,
  };
};

export const Signup = (payload) => async (dispatch) => {
  return axios
    .post(`http://localhost:8080/users/signup`, payload)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data));
      console.log(data);
    });
};

export const LoginUser = (payload) => async (dispatch) => {
  return axios
    .post(`http://localhost:8080/users/login`, payload)
    .then(({ data }) => {
      console.log(data[0]);
      dispatch(isAuthSuccess(data[0]));
      
    });
};
