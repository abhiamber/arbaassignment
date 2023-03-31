import jwt_decode from "jwt-decode";

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
