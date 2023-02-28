import * as actions from "./actionType";
import { getUsers } from "../utils/services";
import axios from "axios";

export const onGetEmp = (emp) => {
  return {
    type: actions.GET_EMPLOYEE_DATA,
    payload: emp,
  };
};

export const onDeleteEmp = (id) => {
  return {
    type: actions.DELETE_EMPLOYEE,
    payload: id,
  };
};

export const onGetUsers = () => {
  return (dispatch) => {
    axios
      .get(getUsers)
      .then((res) => {
        // self-invoking function
        dispatch(
          ((data) => {
            return {
              type: actions.GET_USERS,
              payload: {
                httpResponse: data.slice(0, 5),
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// axios.post(url, {}).then().catch();
