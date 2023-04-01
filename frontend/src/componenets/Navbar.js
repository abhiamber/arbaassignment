import React from "react";
import UserProfileMenu from "./UserProfileMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// function handleCartItem() {
//   return 0;
// }

const Navbar = () => {
  let token = localStorage.getItem("token");

  let { state } = useSelector((state) => state);
  let totalCart = state.totalCart;

  // console.log(showProdData);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div>
          <Link to="/home">Logo</Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div>
            {token ? <Link to="/cart">Cart {totalCart} </Link> : <p>Cart 0</p>}
          </div>
          <div>
            <UserProfileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
