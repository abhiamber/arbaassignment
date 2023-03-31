import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserProfileMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const toggleMenu = () => {
    // console.log(!menuOpen);

    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    // Handle logout logic here
  };

  let closeSidemenu = () => {
    // console.log(menuOpen);
    // setMenuOpen(!menuOpen);
    // }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidemenu);

    return function cleanup() {
      document.removeEventListener("click", closeSidemenu);
    };
  }, []);

  return (
    <div className="user-profile-menu">
      <p
        className="toggle-button"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        User Profile
      </p>
      {menuOpen && (
        <div
          style={{
            width: "10%",
            margin: "auto",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "15px",
            fontWeight: "400",
            fontSize: "20px",
            position: "fixed",
            zIndex: "1000",
            right: "10%",
            top: "40px",
          }}
        >
          <ul
            className="menu-items"
            onClick={toggleMenu}
            style={{ listStyle: "none", color: "teal" }}
          >
            <li>
              <Link to="/store">My Store</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfileMenu;
