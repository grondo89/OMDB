import axios from "axios";
import { SET_USER, SET_USERS, SET_SINGLE_USER } from "../constants";

const setUser = function(user) {
  return {
    type: SET_USER,
    user
  };
};

const setUsers = function(users) {
  return {
    type: SET_USERS,
    users
  };
};

const setSingleUser = function(singleUser) {
  return {
    type: SET_SINGLE_USER,
    singleUser
  };
};

export const fetchUser = function(user) {
  return function(dispatch, getState) {
    return axios.get("/usercheck").then(res => {
      console.log(res, "SOY USER EN EL FRRRRONT")
      dispatch(setUser(res.data));
      return res.data;
    });
  };
};


export const logUser = function(user) {
  return function(dispatch, getState) {
    return axios.post("/login", user).then(res => {
      console.log("soy user en el action creator", res);
      dispatch(setUser(res.data));
      return res.data;
    });
  };
};

export const logoutUser = function(user){
  return function(dispatch, getState) {
    return axios.get ("/logout").then(res =>{
      dispatch(setUser(""))
    })
  }
}

export const fetchUsers = function(user) {
  let user2 = user;
  return function(dispatch, getState) {
    return axios.get(`/findusers/${user2}`, { user2 }).then(res => {
      return dispatch(setUsers(res.data));
    });
  };
};

export const fetchSingleUser = function(userId) {
  let user = userId;
  return function(dispatch, getState) {
    axios.get(`/findsingleuser/${user}`, { user }).then(res => {
      return dispatch(setSingleUser(res.data));
    });
  };
};
