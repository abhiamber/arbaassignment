import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLocalFunc, qtyHandleFuncLocalProd } from "../Redux/action";

const Product = () => {
  let { state } = useSelector((state) => state);
  let showProdData = state.showProdData;

  // console.log(showProdData);
  let dispatch = useDispatch();
  let handleQtyChange = (id, qty) => {
    dispatch(qtyHandleFuncLocalProd(id, qty));
  };

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
                  <button onClick={() => handleQtyChange(elem._id, 1)}>
                    {" "}
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <button onClick={() => handleQtyChange(elem._id, -1)}>
                      -
                    </button>

                    <button>{elem.qty}</button>
                    <button onClick={() => handleQtyChange(elem._id, +1)}>
                      +
                    </button>
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
