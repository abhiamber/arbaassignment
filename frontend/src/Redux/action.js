import jwt_decode from "jwt-decode";
import { API } from "../API";
import {
  ADDCARTDATA,
  ADDPRODATA,
  GETCATDATA,
  GETLOCALPROD,
  GETPRODATA,
} from "./action.type";

export const getToken = () => (dispatch) => {
  try {
    const token = localStorage.getItem("token") || null;
    if (token) {
      const decode = jwt_decode(token);

      dispatch({ type: "DECODE", payload: decode });
    }
  } catch (e) {
    console.log(e);
  }
};

// ******** category section************

export let addCategoryFunc = (data) => async (dispatch) => {
  let res = await fetch(`${API}/cat`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();

    if (data.status === "OK") {
      // console.log(data.category);
      dispatch({ type: ADDCARTDATA, payload: data.category });
      getCategoryFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// ************get category func************

export let getCategoryFunc = () => async (dispatch) => {
  let res = await fetch(`${API}/cat`);
  try {
    let data = await res.json();
    // console.log(data, "nkjnkjnkbjhbvhjbjh");
    if (data.state === "OK") {
      dispatch({ type: GETCATDATA, payload: data.message });
    }
  } catch (e) {
    console.log(e.message);
  }
};

// *****************Edit catData***************

export let editCategoryFunc = (data) => async (dispatch) => {
  let res = await fetch(`${API}/cat`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();
    // console.log(data);

    if (data.status === "OK") {
      // console.log(data.category);
      // dispatch({ type: ADDCARTDATA, payload: data.category });
      getCategoryFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// *****************delete catData***************

export let deleteCategoryFunc = (id) => async (dispatch) => {
  let res = await fetch(`${API}/cat/${id}`, {
    method: "Delete",
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();
    // console.log(data);

    if (data.status === "OK") {
      // console.log(data.category);
      // dispatch({ type: ADDCARTDATA, payload: data.category });
      getCategoryFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// ******** Product section************

export let addProductFunc = (data) => async (dispatch) => {
  let res = await fetch(`${API}/prod`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();

    if (data.status === "OK") {
      // console.log(data.message);
      dispatch({ type: ADDPRODATA, payload: data.message });
      getCategoryFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// ************get prod func************

export let getProductFunc = () => async (dispatch) => {
  let res = await fetch(`${API}/prod`);
  try {
    let data = await res.json();
    // console.log(data, "nkjnkjnk");
    if (data.state === "OK") {
      dispatch({ type: GETPRODATA, payload: data.message });

      dispatch({ type: GETLOCALPROD, payload: data.message });
    }
  } catch (e) {
    console.log(e.message);
  }
};

// *****************Edit prod***************

export let editProductFunc = (data) => async (dispatch) => {
  let res = await fetch(`${API}/prod`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();
    console.log(data);

    if (data.status === "OK") {
      // console.log(data.category);
      // dispatch({ type: ADDCARTDATA, payload: data.category });
      getProductFunc();
    }
  } catch (e) {
    console.log(e);
  }
};
// ************prod edit image change********
export let editProductImageFunc = (data) => async (dispatch) => {
  let res = await fetch(`${API}/prod/img`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();
    // console.log(data);

    if (data.status === "OK") {
      // console.log(data.category);
      // dispatch({ type: ADDCARTDATA, payload: data.category });
      getProductFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// *****************delete prod***************

export let deleteProductFunc = (id) => async (dispatch) => {
  let res = await fetch(`${API}/prod/${id}`, {
    method: "Delete",
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    let data = await res.json();
    // console.log(data);

    if (data.status === "OK") {
      // console.log(data.category);
      // dispatch({ type: ADDCARTDATA, payload: data.category });
      getProductFunc();
    }
  } catch (e) {
    console.log(e);
  }
};

// ****************get local userprod********************

export let getProductLocalFunc = () => async (dispatch) => {
  let res = await fetch(`${API}/prod`);
  try {
    let data = await res.json();
    // console.log(data, "nkjnkjnk");
    if (data.state === "OK") {
      let localStorShowData =
        JSON.parse(localStorage.getItem("localProdData")) || null;
      let localData = [];
      if (!localStorShowData) {
        localData = data.message.map((elem, index) => {
          let x = elem;
          x.qty = 0;
          return x;
        });
      } else {
        // console.log("m m");
        for (let i = 0; i < data.message.length; i++) {
          let tqty = 0;
          for (let j = 0; j < localStorShowData.length; j++) {
            if (data.message[i]._id === localStorShowData[j]._id) {
              tqty = localStorShowData[j].qty;
              break;
            }
          }
          localData.push({ ...data.message[i], qty: tqty });
        }
        // localStorage.setItem("localProdData", JSON.stringify(localData));
      }
      localStorage.setItem("localProdData", JSON.stringify(localData));

      dispatch({ type: GETLOCALPROD, payload: localData });
    }
  } catch (e) {
    console.log(e.message);
  }
};

export let qtyHandleFuncLocalProd = (id, qty) => async (dispatch) => {
  console.log(id, qty);
  let localStorShowData =
    JSON.parse(localStorage.getItem("localProdData")) || null;
  let localData =
    localStorShowData &&
    localStorShowData.map((elem) => {
      if (elem._id === id) {
        return { ...elem, qty: elem.qty + qty };
      } else {
        return elem;
      }
    });
  // console.log("m m");
  // for (let i = 0; i < data.message.length; i++) {
  //   let tqty = 0;
  //   for (let j = 0; j < localStorShowData.length; j++) {
  //     if (data.message[i]._id === localStorShowData[j]._id) {
  //       tqty = localStorShowData[j].qty;
  //       break;
  //     }
  //   }
  //   localData.push({ ...data.message[i], qty: tqty });
  // }
  console.log(localData);
  localStorage.setItem("localProdData", JSON.stringify(localData));

  dispatch({ type: GETLOCALPROD, payload: localData });
};
