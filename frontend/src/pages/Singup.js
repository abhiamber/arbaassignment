import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../API";

let crediantils = {
  userName: "",
  password: "",
  fullName: "",
  email: "",
  avatar: "",
  confirm: "",
};
const Singup = () => {
  let [user, setUser] = useState(crediantils);

  let navigate = useNavigate();

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleSingUp = async () => {
    let { userName, password, fullName, email, avatar, confirm } = user;

    if (!userName && !password && !fullName && !email && !avatar && !confirm) {
      return alert("plz fill all the required details");
    } else if (password !== confirm) {
      return alert("plz type matched password");
    }

    let res = await fetch(`${API}/user/signin`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    try {
      let data = await res.json();
      if (data.status === "OK") {
        setUser(crediantils);
        navigate("/");
      } else {
        return alert("something weent wrong try again");
      }
    } catch (e) {
      console.log(e);
      return alert("something weent wrong try again");
    }
  };

  const hanldeGoToLogin = () => {
    navigate("/");
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      return alert("Please Select an Image!");
    }
    // console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-easy");
      data.append("cloud_name", "abhishekamber");
      fetch("https://api.cloudinary.com/v1_1/abhishekamber/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({ ...user, avatar: data.url.toString() });
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return alert("Please Select an Image!");
    }
  };
  return (
    <div>
      <h1>App Name</h1>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit</p>{" "}
      <div>
        <label>fullName</label>
        <input
          name="fullName"
          tyep="text"
          value={user.fullName}
          onChange={handleChange}
        />
        <br />
        <label>userName</label>
        <input
          name="userName"
          tyep="text"
          value={user.userName}
          onChange={handleChange}
        />
        <br />
        <label>upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
        <br />
        <label>email</label>
        <input
          name="email"
          tyep="text"
          value={user.email}
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

        <label> confirm password</label>
        <input
          name="confirm"
          type="password"
          value={user.confirm}
          onChange={handleChange}
        />

        <button onClick={handleSingUp}>Register</button>
      </div>
      <p>
        already have an account?{" "}
        <span
          onClick={hanldeGoToLogin}
          style={{ color: "teal", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Singup;
