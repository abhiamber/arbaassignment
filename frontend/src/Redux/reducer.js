import { ADDCARTDATA, ADDPRODATA, GETCATDATA, GETPRODATA } from "./action.type";

let initialState = {
  auth: localStorage.getItem("token") || null,
  userData: {},
  catData: [],

  proData: [],
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

    case GETCATDATA: {
      return { ...state, catData: payload };
    }
    case ADDCARTDATA: {
      // console.log(payload);
      return { ...state, catData: [...state.catData, payload] };
    }
    case GETPRODATA: {
      return { ...state, proData: payload };
    }

    case ADDPRODATA: {
      return { ...state, proData: [...state.proData, payload] };
    }

    default: {
      return state;
    }
  }
};
