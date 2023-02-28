import * as actions from "./actionType";

const initState = {
  employeData: [],
  users: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_EMPLOYEE_DATA:
      return {
        ...state,
        employeData: [...state.employeData, action.payload],
      };

    case actions.DELETE_EMPLOYEE:
      return {
        ...state,
        employeData: state.employeData.filter(
          (val) => val.id != action.payload
        ),
      };

    case actions.GET_USERS:
      return { ...state, users: action.payload.httpResponse };

    default:
      return state;
  }
};

// const color =['pink', 'red', 'pink'];

// const result = color.filter((ele) => {
//   return ele == 'pink'
// })

// ['pink', 'pink']
