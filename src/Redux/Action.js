import { ADD_DATA, GET_USER } from "./ActionType";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
