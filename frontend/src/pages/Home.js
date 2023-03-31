import React from "react";
import Crousel from "../componenets/Crousel";
import Popup from "../componenets/Popup";
import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";
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

const slides = [
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0VgMgSw_yk5WLE3esnkpd7PhlA1gi8VphnzjVWjQhuogX_2P2",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1517265035603-faefa167335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXhwbG9yZSUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
];

const Home = () => {
  return (
    <div>
      <h1>Product</h1>
      <Popup />
      <div>
        <Crousel slides={slides} />
      </div>

      <h1>Product section</h1>
      <div
        style={{
          marginBottom: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
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

      <div style={{ textAlign: "right", marginRight: "80px" }}>
        <button>
          <Link to="/prod"> {`Add ALL Products>>>`} </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
