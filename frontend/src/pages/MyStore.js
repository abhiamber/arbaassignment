import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/MyStore.module.css";
let categoryData = [
  {
    _id: 1,
    name: "shirts",
    slug: "1",
    image:
      "http://localhost:3000/static/media/PRO%20MANI%20LOGO.3423e0232b72624313ab.jpg",
    owner: "a0x13bskghXx1203",
  },
  {
    _id: 2,
    name: "T-shirts",
    slug: "7",
    image:
      "http://localhost:3000/static/media/PRO%20MANI%20LOGO.3423e0232b72624313ab.jpg",
    owner: "a0x13bskghXx1203",
  },
];

let productData = [
  {
    _id: 1,
    title: "Levi's",
    description: "lorem5",
    price: "500",
    category: "T-shirts",
    image:
      "http://localhost:3000/static/media/PRO%20MANI%20LOGO.3423e0232b72624313ab.jpg",
    owner: "a0x13bskghXx1203",
  },
  {
    _id: 2,
    title: "Roadster",
    description: "lorem5",
    price: "1000",
    category: "shirts",
    image:
      "http://localhost:3000/static/media/PRO%20MANI%20LOGO.3423e0232b72624313ab.jpg",
    owner: "a0x13bskghXx1203",
  },
];

const MyStore = () => {
  const Navigate = useNavigate();
  const [bg1, setBg1] = useState("teal");
  const [bg2, setBg2] = useState("transparent");
  const [display1, setDisplay1] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [display4, setDisplay4] = useState("none");
  const [display5, setDisplay5] = useState("none");
  const [display6, setDisplay6] = useState("none");
  const [display7, setDisplay7] = useState("none");
  const [display8, setDisplay8] = useState("none");
  const [catName, setCatName] = useState("none");
  const [catSlug, setCatSlug] = useState("none");
  const [catImg, setCatImg] = useState("none");
  const [catFilter, setCatFilter] = useState("");
  const [proTitle, setProTitle] = useState("none");
  const [proDescription, setProDescription] = useState("none");
  const [proPrice, setProPrice] = useState("none");
  const [proCategory, setProCategory] = useState("none");
  const [proImage, setProImage] = useState("none");
  const [proFilter, setProFilter] = useState("");
  const [id, setId] = useState("");
  const [catData, setCatData] = useState(categoryData);
  const [proData, setProData] = useState(productData);

  // <----------------------- Category functions ---------------------->

  const handleCat = () => {
    setBg1("teal");
    setBg2("transparent");
    setDisplay1("block");
    setDisplay2("none");
  };

  // <------- Category CRUD functions ------>

  const handleCatFilter = () => {
    console.log(catFilter);
    if (catFilter == "") {
      setCatData(categoryData);
      setDisplay3("none");
      return;
    }
    let filter = catFilter;
    let filteredData = categoryData.filter((e) => {
      return e.name == filter;
    });
    setCatData(filteredData);
    setDisplay3("none");
  };

  const handleCatAdd = (event) => {
    event.preventDefault();
    let payload = {
      name: catName,
      slug: catSlug,
      image: catImg,
      _id: categoryData.length + 1,
    };
    let data = [...catData, payload];
    setCatData(data);
    alert("Category added Successfully");
    setDisplay4("none");
  };

  const handleCatEdit = (event) => {
    event.preventDefault();
    let payload = {
      name: catName,
      slug: catSlug,
      image: catImg,
    };
    let newData = [];
    let filteredData = catData.filter((e) => {
      if (e._id == id) {
        let id = e._id,
          owner = e.owner;
        newData.push({ ...payload, id, owner });
        return payload;
      } else {
        newData.push(e);
        return e;
      }
    });
    setCatData(newData);
    alert("Edited Successfullly");
    setDisplay5("none");
  };

  const handleCatDlt = (e) => {
    let i = e._id;
    let data = catData.splice(1, i);
    alert("Delted Successfullly");
    setCatData(data);
  };

  // <----------------------- Product functions -------------------->
  const handlePro = () => {
    setBg2("teal");
    setBg1("transparent");
    setDisplay1("none");
    setDisplay2("block");
  };

  // <------ Product CRUD functions ------>

  const handleProFilter = () => {
    console.log(proFilter, productData);
    if (proFilter === "") {
      setProData(productData);
      setDisplay6("none");
      return;
    }
    let filter = proFilter;
    let filteredData = productData.filter((e) => {
      return e.category === filter;
    });
    setProData(filteredData);
    setDisplay6("none");
  };

  const handleProAdd = (event) => {
    event.preventDefault();
    let payload = {
      title: proTitle,
      description: proDescription,
      price: proPrice,
      category: proCategory,
      image: proImage,
      _id: proData.length + 1,
    };
    let data = [...proData, payload];
    setProData(data);
    console.log(proData);
    alert("Product added Successfully");
    setDisplay7("none");
  };

  const handleProEdit = (event) => {
    event.preventDefault();
    let payload = {
      title: proTitle,
      description: proDescription,
      price: proPrice,
      category: proCategory,
      image: proImage,
    };
    let newData = [];
    let filteredData = proData.filter((e) => {
      if (e._id == id) {
        let i = e._id,
          owner = e.owner;
        newData.push({ ...payload, _id: i, owner });
        return payload;
      } else {
        newData.push(e);
        return e;
      }
    });
    console.log(newData);
    setProData(newData);
    alert("Product Edited Successfullly");
    setDisplay8("none");
  };

  const handleProDlt = (e) => {
    let i = e._id;
    let data = proData.splice(1, i);
    setProData(data);
  };

  // <---------------------------- Common Functions -------------------------->

  const handleClose = (func) => {
    func("none");
  };

  const handleOpen = (func) => {
    func("block");
  };

  const handleOpen2 = (func, id) => {
    func("block");
    setId(id);
  };

  const handleRefresh = () => {
    window.location.href = "";
  };

  useEffect(() => {
    setCatData(catData);
    setProData(proData);
  }, [catData, proData]);

  return (
    <>
      <div className={styles.head}>
        <div
          className={styles.cat}
          style={{ backgroundColor: bg1 }}
          onClick={handleCat}
        >
          Category
        </div>
        <div
          className={styles.pro}
          style={{ backgroundColor: bg2 }}
          onClick={handlePro}
        >
          Product
        </div>
      </div>
      <div className={styles.cat_div} style={{ display: display1 }}>
        <div className={styles.cat_filter_div}>
          <button className={styles.cat_filter} onClick={handleRefresh}>
            Refresh
          </button>
          <button
            className={styles.cat_filter}
            onClick={() => handleOpen(setDisplay3)}
          >
            Filter
          </button>
          <button
            className={styles.cat_filter}
            onClick={() => handleOpen(setDisplay4)}
          >
            Add
          </button>
        </div>
        <h1>Category Table</h1>
        <table className={styles.cat_table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {catData &&
              catData?.map((e) => (
                <tr>
                  <td>
                    <img
                      src={e.image}
                      style={{ width: "150px", height: "100px" }}
                      alt="catImg"
                    />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.slug}</td>
                  <td>
                    <button
                      style={{
                        background: "purple",
                        padding: "1%",
                        borderRadius: "2px",
                        marginRight: "2%",
                      }}
                      onClick={() => handleOpen2(setDisplay5, e._id)}
                    >
                      EDIT
                    </button>
                    <button
                      style={{
                        background: "purple",
                        padding: "1%",
                        borderRadius: "2px",
                      }}
                      onClick={() => handleCatDlt(e)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pro_div} style={{ display: display2 }}>
        <div className={styles.pro_filter_div}>
          <button className={styles.pro_filter} onClick={handleRefresh}>
            Refresh
          </button>
          <button
            className={styles.pro_filter}
            onClick={() => handleOpen(setDisplay6)}
          >
            Filter
          </button>
          <button
            className={styles.pro_filter}
            onClick={() => handleOpen(setDisplay7)}
          >
            Add
          </button>
        </div>
        <h1>Product Table</h1>
        <table className={styles.pro_table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proData &&
              proData?.map((e) => (
                <tr>
                  <td>
                    <img
                      src={e.image}
                      style={{ width: "150px", height: "100px" }}
                      alt="catImg"
                    />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.description}</td>
                  <td>{e.category}</td>
                  <td>{e.price}</td>
                  <td>
                    <button
                      style={{
                        background: "purple",
                        padding: "1%",
                        borderRadius: "2px",
                        marginRight: "2%",
                      }}
                      onClick={() => handleOpen2(setDisplay8, e._id)}
                    >
                      EDIT
                    </button>
                    <button
                      style={{
                        background: "purple",
                        padding: "1%",
                        borderRadius: "2px",
                      }}
                      onClick={() => handleProDlt(e)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* cat_filter_modal */}

      <div className={styles.cat_filter_modal} style={{ display: display3 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay3)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Category Filter</h1>
        <select name="" id="" onChange={(e) => setCatFilter(e.target.value)}>
          <option value="">Select Name</option>
          <option value="shirts">shirts</option>
          <option value="T-shirts">T-shirts</option>
          <option value=""></option>
        </select>
        <button
          className={styles.cat_filter_modal_submit}
          onClick={() => handleCatFilter()}
        >
          Filter Category
        </button>
      </div>

      {/* cat_add_modal */}

      <div className={styles.cat_add_modal} style={{ display: display4 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay4)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Add Category</h1>
        <form action="" onSubmit={(event) => handleCatAdd(event)}>
          <label htmlFor="">Category Name</label>
          <input
            type="text"
            placeholder="Enter Category Name"
            onChange={(e) => setCatName(e.target.value)}
          />
          <label htmlFor="">Category Slug</label>
          <input
            type="text"
            placeholder="Enter Category Slug"
            onChange={(e) => setCatSlug(e.target.value)}
          />
          <label htmlFor="">Category Image</label>
          <input
            type="text"
            placeholder="Enter Category Image"
            onChange={(e) => setCatImg(e.target.value)}
          />
          <input
            type="submit"
            className={styles.cat_add_modal_submit}
            value={"ADD CATEGORY"}
          />
        </form>
      </div>

      {/* cat_edit_modal */}

      <div className={styles.cat_add_modal} style={{ display: display5 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay5)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Edit Category</h1>
        <form action="" onSubmit={(event) => handleCatEdit(event)}>
          <label htmlFor="">Category Name</label>
          <input
            type="text"
            placeholder="Enter Category Name"
            onChange={(e) => setCatName(e.target.value)}
          />
          <label htmlFor="">Category Slug</label>
          <input
            type="text"
            placeholder="Enter Category Slug"
            onChange={(e) => setCatSlug(e.target.value)}
          />
          <label htmlFor="">Category Image</label>
          <input
            type="text"
            placeholder="Enter Category Image"
            onChange={(e) => setCatImg(e.target.value)}
          />
          <input
            type="submit"
            className={styles.cat_edit_modal_submit}
            value={"EDIT CATEGORY"}
          />
        </form>
      </div>

      {/* pro_filter_modal */}

      <div className={styles.pro_filter_modal} style={{ display: display6 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay6)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Product Filter</h1>
        <select name="" id="" onChange={(e) => setProFilter(e.target.value)}>
          <option value="">Select Category</option>
          <option value="T-shirts">T-shirts</option>
          <option value="shirts">Shirts</option>
          <option value=""></option>
        </select>
        <button
          className={styles.pro_filter_modal_submit}
          onClick={() => handleProFilter()}
        >
          Filter Products
        </button>
      </div>

      {/* pro_add_modal */}

      <div className={styles.pro_add_modal} style={{ display: display7 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay7)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Add Product</h1>
        <form action="" onSubmit={(event) => handleProAdd(event)}>
          <label htmlFor="">Product Title</label>
          <input
            type="text"
            placeholder="Enter Product Title"
            onChange={(e) => setProTitle(e.target.value)}
          />
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Enter Category Description"
            onChange={(e) => setProDescription(e.target.value)}
          />
          <label htmlFor="">Product Price</label>
          <input
            type="text"
            placeholder="Enter Product Price"
            onChange={(e) => setProPrice(e.target.value)}
          />
          <label htmlFor="">Product Category</label>
          <input
            type="text"
            placeholder="Enter Product Category"
            onChange={(e) => setProCategory(e.target.value)}
          />
          <label htmlFor="">Product Image</label>
          <input
            type="text"
            placeholder="Enter Image Image"
            onChange={(e) => setProImage(e.target.value)}
          />
          <input
            type="submit"
            className={styles.pro_add_modal_submit}
            value={"ADD PRODUCT"}
          />
        </form>
      </div>

      {/* pro_edit_modal */}

      <div className={styles.pro_edit_modal} style={{ display: display8 }}>
        <div>
          <img
            onClick={() => handleClose(setDisplay8)}
            src="https://png.pngtree.com/png-vector/20190603/ourmid/pngtree-icon-close-button-png-image_1357822.jpg"
            alt="closeBtn"
          ></img>
        </div>
        <h1>Edit Product</h1>
        <form action="" onSubmit={(event) => handleProEdit(event)}>
          <label htmlFor="">Product Title</label>
          <input
            type="text"
            placeholder="Enter Product Title"
            onChange={(e) => setProTitle(e.target.value)}
          />
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Enter Category Description"
            onChange={(e) => setProDescription(e.target.value)}
          />
          <label htmlFor="">Product Price</label>
          <input
            type="text"
            placeholder="Enter Product Price"
            onChange={(e) => setProPrice(e.target.value)}
          />
          <label htmlFor="">Product Category</label>
          <input
            type="text"
            placeholder="Enter Product Category"
            onChange={(e) => setProCategory(e.target.value)}
          />
          <label htmlFor="">Product Image</label>
          <input
            type="text"
            placeholder="Enter Image Image"
            onChange={(e) => setProImage(e.target.value)}
          />
          <input
            type="submit"
            className={styles.pro_edit_modal_submit}
            value={"EDIT PRODUCT"}
          />
        </form>
      </div>
    </>
  );
};

export default MyStore;