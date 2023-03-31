import React, { useEffect, useLayoutEffect, useState } from "react";

function Popup({ setShowTerms }) {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    if (setShowTerms) {
      setShowTerms();
    }
    setIsOpen(!isOpen);
  };
  const togglePopupAccept = () => {
    if (setShowTerms) {
      setShowTerms();
    }
    setIsOpen(!isOpen);
    sessionStorage.setItem("popup", !isOpen);
  };

  useLayoutEffect(() => {
    let accept = JSON.parse(sessionStorage.getItem("popup"));
    // console.log(accept, isOpen, "nkj");
    if (accept === false) {
      // console.log(accept);
      setIsOpen(false);
    }
  }, []);

  return (
    <div>
      {isOpen && (
        <div
          className="popup"
          style={{
            width: "40%",
            margin: "auto",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "15px",
            fontWeight: "600",
            fontSize: "20px",
            position: "fixed",
            zIndex: "1000",
            left: "28%",
            top: "80px",
          }}
        >
          <h2 style={{ textAlign: "justify" }}>Terms & Conditions</h2>
          <div
            className="popup-inner"
            style={{ textAlign: "justify", padding: "9px" }}
          >
            <p>
              Note that Lorem Ipsum is a placeholder text commonly used in
              design and publishing to fill space until the final text is ready.
              It has no meaning and is simply a scrambled version of a Latin
              text.
            </p>
            <p>
              Note that Lorem Ipsum is a placeholder text commonly used in
              design and publishing to fill space until the final text is ready.
              It has no meaning and is simply a scrambled version of a Latin
              text.
            </p>
            <p>
              Note that Lorem Ipsum is a placeholder text commonly used in
              design and publishing to fill space until the final text is ready.
              It has no meaning and is simply a scrambled version of a Latin
              text.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button onClick={togglePopup}>Cancel</button>

            <button onClick={togglePopupAccept}>Accept</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
