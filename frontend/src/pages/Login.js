import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../API";
import { useDispatch } from "react-redux";
import { getToken } from "../Redux/action";

let crediantils = {
  userName: "",
  password: "",
};

const Login = () => {
  let [user, setUser] = useState(crediantils);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleLogin = async () => {
    let { userName, password } = user;

    if (!userName && !password) {
      return alert("plz fill all the required details");
    }

    let res = await fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    try {
      let data = await res.json();
      console.log(data);
      if (data.status === "OK") {
        localStorage.setItem("token", data.message);
        dispatch(getToken());

        dispatch({ type: "LOGIN", payload: data.message });
        setUser(crediantils);
        navigate("/home");
      } else {
        return alert("something weent wrong try again");
      }
    } catch (e) {
      console.log(e);
      return alert("something weent wrong try again");
    }
  };

  const hanldeGoTOSingup = () => {
    navigate("/sign");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <h1>App Name</h1>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit</p>{" "}
      <div>
        <label>userName</label>
        <input
          name="userName"
          tyep="text"
          value={user.userName}
          onChange={handleChange}
        />
        <br />
        <label>password</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
      <p>
        don't have an account?{" "}
        <span
          onClick={hanldeGoTOSingup}
          style={{ color: "teal", cursor: "pointer" }}
        >
          Signup
        </span>
      </p>
    </div>
  );
};

export default Login;
