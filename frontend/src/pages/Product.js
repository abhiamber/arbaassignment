import React from "react";
let data = [
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
  {
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
    title: "title1",
    description: "description",
    price: "20",
  },
];

const Product = () => {
  return (
    <div>
      <h1>Product</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.url} alt="images" />
              <div>
                <p>{elem.title}</p>
                <p>{elem.description}</p>
                <p>{elem.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
