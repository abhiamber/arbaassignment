import {
  ADDCARTDATA,
  ADDPRODATA,
  GETCATDATA,
  GETLOCALPROD,
  GETPRODATA,
} from "./action.type";

function getCartTotal() {
  let sum = 0;
  let localStorShowData =
    JSON.parse(localStorage.getItem("localProdData")) || [];

  for (let i = 0; i < localStorShowData.length; i++) {
    if (localStorShowData[i].qty > 0) {
      sum++;
    }
  }
  return sum;
}

let initialState = {
  auth: localStorage.getItem("token") || null,
  userData: {},
  catData: [],
  showProdData: [],
  totalCart: getCartTotal(),

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
    case GETLOCALPROD: {
      let data = getCartTotal();

      return { ...state, showProdData: payload, totalCart: data };
    }

    default: {
      return state;
    }
  }
};
