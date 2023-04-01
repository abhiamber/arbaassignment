import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLocalFunc } from "../Redux/action";

const Product = () => {
  let { state } = useSelector((state) => state);
  let showProdData = state.showProdData;

  // console.log(showProdData);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductLocalFunc());
  }, []);
  return (
    <div>
      <h1>Product</h1>

      <div
        style={{
          marginBottom: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {showProdData.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.image} style={{ width: "30%" }} alt="images" />
              <div>
                <p>{elem.title}</p>
                <p>{elem.description}</p>
                <p>{elem.price}</p>
                {elem.qty === 0 ? (
                  <button>Add to Cart</button>
                ) : (
                  <div>
                    <button>-</button>

                    <button>{elem.qty}</button>
                    <button>+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
