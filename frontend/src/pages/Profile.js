import React, { useEffect, useState } from "react";
import FullNameForm from "../componenets/UserForm/FullNameForm";
import Popup from "../componenets/Popup";
import UserPasswordChange from "../componenets/UserForm/UserPasswordChng";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  let [showTems, setShowTerms] = useState(false);
  let [loading, setLoading] = useState(true);
  let accept = JSON.parse(sessionStorage.getItem("popup"));

  let { state } = useSelector((state) => state);
  let userDetails = state.userData;
  // console.log(userDetails);
  let dispatch = useDispatch();

  let handleShowTerms = () => {
    setShowTerms(!showTems);
  };
  console.log(showTems);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  if (loading) {
    return <h1>...........Loading</h1>;
  }
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h1>Profile</h1>
      <div>
        <img src={userDetails.avatar} alt="" style={{ width: "30%" }} />
        <p>{userDetails.userName}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.fullName}</p>

        <FullNameForm />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        {showTems && accept !== false ? (
          <Popup setShowTerms={handleShowTerms} />
        ) : (
          <button onClick={handleShowTerms}> Tems & Conditions</button>
        )}
        <UserPasswordChange />
      </div>
    </div>
  );
};

export default Profile;
