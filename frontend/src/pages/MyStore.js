import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/MyStore.module.css";
// import { postDetails } from "../CloudiNary";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryFunc,
  addProductFunc,
  deleteCategoryFunc,
  deleteProductFunc,
  editCategoryFunc,
  getCategoryFunc,
  getProductFunc,
} from "../Redux/action";
// import { GETCATDATA } from "../Redux/action.type";


let editCatData = {
  name: "",
  slug: "",
  image: "",
};

let editProdData = {
  title: "",
  description: "",
  price: "",
  category: "",
  image: "",
};

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
  const [catFilter, setCatFilter] = useState(editCatData);
  const [proTitle, setProTitle] = useState("none");
  const [proDescription, setProDescription] = useState("none");
  const [proPrice, setProPrice] = useState("none");
  const [proCategory, setProCategory] = useState("none");
  const [proImage, setProImage] = useState("none");
  const [proFilter, setProFilter] = useState("");
  let [catEdit, setCatEdit] = useState(editCatData);
  let [prodEdit, setProdEdit] = useState(editProdData);
  const [itemId, setItemId] = useState();
  // let [proDataa, setProData] = useState(productData);

  let { state } = useSelector((state) => state);
  let catData = state.catData;
  let proData = state.proData;

  let { id } = state.userData;
  // console.log(state.catData);
  let dispatch = useDispatch();

  // <----------------------- Category functions ---------------------->

  const handleCat = () => {
    setBg1("teal");
    setBg2("transparent");
    setDisplay1("block");
    setDisplay2("none");
  };

  // <------- Category CRUD functions ------>

  let catEditOnChange = (e) => {
    setCatEdit({ ...catEdit, [e.target.name]: e.target.value });
  };
  let catFilterOnChange = () => {};
  const handleCatFilter = () => {
    console.log(catFilter);
    if (catFilter === "") {
      // setCatData(categoryData);
      setDisplay3("none");
      return;
    }
    let filter = catFilter;
    // let filteredData = categoryData.filter((e) => {
    //   return e.name === filter;
    // });
    // setCatData(filteredData);
    setDisplay3("none");
  };

  const handleCatAdd = (event) => {
    event.preventDefault();
    catEdit = { ...catEdit, owner: id };

    dispatch(addCategoryFunc(catEdit));
    alert("Category added Successfully");
    setDisplay4("none");
  };

  const handleCatEdit = (event) => {
    event.preventDefault();
    catEdit = { ...catEdit, id: itemId };
    dispatch(editCategoryFunc(catEdit));
    dispatch(getCategoryFunc());

    // let newData = [];
    // let filteredData = catData.filter((e) => {
    //   if (e._id === id) {
    //     let id = e._id,
    //       owner = e.owner;
    //     newData.push({ ...payload, id, owner });
    //     return payload;
    //   } else {
    //     newData.push(e);
    //     return e;
    //   }
    // });
    // setCatData(newData);
    alert("Edited Successfullly");
    setDisplay5("none");
  };

  const handleCatDlt = (e) => {
    dispatch(deleteCategoryFunc(e));
    dispatch(getCategoryFunc());

    alert("Delted Successfullly");
    // setCatData(data);
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
    if (proFilter === "") {
      // setProData(productData);
      setDisplay6("none");
      return;
    }
    // let filter = proFilter;
    // let filteredData = productData.filter((e) => {
    //   return e.category === filter;
    // });
    // setProData(filteredData);
    setDisplay6("none");
  };

  let prodEditOnChange = (e) => {
    setProdEdit({ ...prodEdit, [e.target.name]: e.target.value });
  };
  const handleProAdd = (event) => {
    event.preventDefault();

    prodEdit = { ...prodEdit, owner: id };

    dispatch(addProductFunc(prodEdit));
    // alert("Category added Successfully");
    // console.log(prodEdit);
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
    // let filteredData = proData.filter((e) => {
    //   if (e._id == id) {
    //     let i = e._id,
    //       owner = e.owner;
    //     newData.push({ ...payload, _id: i, owner });
    //     return payload;
    //   } else {
    //     newData.push(e);
    //     return e;
    //   }
    // });
    console.log(newData);
    // setProData(newData);
    alert("Product Edited Successfullly");
    setDisplay8("none");
  };

  const handleProDlt = (e) => {
    dispatch(deleteProductFunc(e));
    dispatch(getProductFunc());

    alert("Delted Successfullly");
  };

  // <---------------------------- Common Functions -------------------------->

  let uploadImage = async (pics) => {
    if (pics === undefined) {
      alert("Please Select an Image!");
      return;
    }
    // console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-easy");
      data.append("cloud_name", "abhishekamber");
      fetch("https://api.cloudinary.com/v1_1/abhishekamber/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.url.toString());
          setCatEdit({ ...catEdit, image: data.url.toString() });
          setProdEdit({ ...prodEdit, image: data.url.toString() });

          // setCatImg(data.url.toString());
          return;

          // console.log();
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    } else {
      alert("Please Select an Image!");
      return null;
    }
  };

  const handleClose = (func) => {
    func("none");
  };

  const handleOpen = (func) => {
    func("block");
  };

  const handleOpen2 = (func, id) => {
    func("block");
    setItemId(id);
  };

  const handleRefresh = () => {
    window.location.href = "";
  };

  useEffect(() => {
    dispatch(getCategoryFunc());
  }, [display4, display5, display6]);

  useEffect(() => {
    dispatch(getProductFunc());
  }, [display1, display2, display3]);

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
                <tr key={e._id}>
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
                      onClick={() => handleCatDlt(e._id)}
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
              proData.map((e, index) => (
                <tr key={index}>
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
          />
        </div>
        <h1>Category Filter</h1>
        <input
          placeholder="catName"
          type="text"
          name="name"
          onChange={catFilterOnChange}
        />
        <br />
        <br />
        <input
          placeholder="catSlug"
          type="text"
          name="slug"
          onChange={catFilterOnChange}
        />
        <br />
        <br />
        <input
          placeholder="imageCat"
          type="file"
          onChange={(e) => {
            uploadImage(e.target.files[0]);
          }}
          name="slug"
        />

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
          />
        </div>
        <h1>Add Category</h1>
        <form action="" onSubmit={(event) => handleCatAdd(event)}>
          <label htmlFor="">Category Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Category Name"
            onChange={catEditOnChange}
          />
          <label htmlFor="">Category Slug</label>
          <input
            type="text"
            name="slug"
            placeholder="Enter Category Slug"
            onChange={catEditOnChange}
          />
          <label htmlFor="">Category Image</label>
          <input
            type="file"
            placeholder="Enter Category Image"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
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
            name="name"
            placeholder="Enter Category Name"
            onChange={catEditOnChange}
          />
          <label htmlFor="">Category Slug</label>
          <input
            type="text"
            name="slug"
            placeholder="Enter Category Slug"
            onChange={catEditOnChange}
          />
          <label htmlFor="">Category Image</label>
          <input
            type="file"
            placeholder="Enter Category Image"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
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
            name="title"
            placeholder="Enter Product Title"
            onChange={prodEditOnChange}
          />
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Enter Category Description"
            name="description"
            onChange={prodEditOnChange}
          />
          <label htmlFor="">Product Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter Product Price"
            onChange={prodEditOnChange}
          />
          <label htmlFor="">Product Category</label>
          <select
            type="text"
            placeholder="Enter Product Category"
            name="category"
            onChange={prodEditOnChange}
          >
            {catData &&
              catData.map((elem, index) => {
                return (
                  <option key={index} value={elem._id}>
                    {elem._id}
                  </option>
                );
              })}
          </select>

          <label htmlFor="">Product Image</label>
          <input
            type="file"
            placeholder="Enter Prodoct Image"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
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
