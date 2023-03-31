let initialState = {
  auth: localStorage.getItem("token") || null,
  userData: {},

  prod: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      // console.log(payload);
      return { ...state, auth: payload };
    }
    case "DECODE": {
      // console.log(payload);
      return { ...state, userData: payload };
    }
    default: {
      return state;
    }
  }
};
