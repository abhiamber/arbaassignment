import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../API";
import { getToken } from "../../Redux/action";

function UserPasswordChange(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  let [password, setUser] = useState("");

  let dispatch = useDispatch();

  let { state } = useSelector((state) => state);
  let id = state.userData.id;

  let handleFullName = async () => {
    if (!password) {
      return alert("plz fill the details");
    }
    let res = await fetch(`${API}/user/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ password }),
      headers: {
        "content-type": "application/json",
      },
    });

    try {
      let data = await res.json();
      if (data.status === "OK") {
        //  localStorage.setItem("token", data.message);
        //  dispatch(getToken());

        //  dispatch({ type: "LOGIN", payload: data.message });
        toggleMenu();
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="user-profile-menu">
      <button
        className="toggle-button"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        Change Password
      </button>
      {menuOpen && (
        <div
          style={{
            width: "40%",
            margin: "auto",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "15px",
            fontWeight: "400",
            fontSize: "20px",
            position: "fixed",
            zIndex: "1000",
            left: "30%",
            top: "60px",
          }}
        >
          <div>
            <label>password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <button onClick={() => setMenuOpen(!menuOpen)}>Cancel</button>

            <button onClick={handleFullName}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPasswordChange;
