import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import moment from "moment";

import { useDropzone } from "react-dropzone";
import { createProduct } from "./ProductsAPI";
import { usePromiseTracker } from "react-promise-tracker";

//component
import Body from "../../HOCs/Body";
import Button from "../../ui/Button/Button";
import Spinner from "../../ui/Spinner/Spinner";

//css
import "./Products.scss";

const { ipcRenderer } = window.require("electron");

const baseStyle = {
   flex: 1,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   padding: "20px 20px",
   height: "120px",

   borderWidth: 2,
   borderRadius: 2,
   borderColor: "#4e4e4e",
   borderStyle: "dashed",
   backgroundColor: "#121212",
   color: "#bdbdbd",
   outline: "none",
   transition: "border .24s ease-in-out",
};

const activeStyle = {
   borderColor: "#2196f3",
};

const acceptStyle = {
   borderColor: "#00e676",
};

const rejectStyle = {
   borderColor: "#ff1744",
};

const Products = (props) => {
   const [token, setToken] = useState("");
   const [products, setProducts] = useState(props.products[0]);
   const [selected, setSelected] = useState(null);

   const [photo, setPhoto] = useState(null);
   const [formData, setFormData] = useState({
      stock: "",
      description: "",
      price: "",
      name: "",
      category: "",
      photo: "",
   });

   useEffect(() => {
      ipcRenderer.send("get-token", "Gimee");
      ipcRenderer.on("token-reply", (event, arg) => {
         if (arg !== undefined) {
            setToken(arg);
         }
      });
      props.setProducts((prev) => {
         return [...prev, products];
      });
      // const timer = setInterval(() => {
      //    axios.get("https://dhaushop.herokuapp.com/api/products").then((res) => {
      //       setProducts(res.data.data);
      //    });
      //    ipcRenderer.send("giveMeInternetStatus", "Hey main, give me internet status");
      // }, 1000);
      // return () => clearInterval(timer);
   }, []);
   const { promiseInProgress } = usePromiseTracker();

   const handleChange = (e) => {
      const { name, value } = e.target;
      if (selected) {
         setSelected((prevState) => ({
            ...prevState,
            [name]: value,
         }));
      } else {
         setFormData((prevState) => ({
            ...prevState,
            [name]: value,
         }));
      }
   };
   const submitForms = (event) => {
      event.preventDefault();

      createProduct(selected ? selected : formData, token, setProducts, photo);
   };

   const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      acceptedFiles,
   } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
         // console.log("chammamessi", acceptedFiles[0]);
         setPhoto(acceptedFiles[0]);
      },
   });

   const style = useMemo(
      () => ({
         ...baseStyle,
         ...(isDragActive ? activeStyle : {}),
         ...(isDragAccept ? acceptStyle : {}),
         ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragActive, isDragReject, isDragAccept]
   );
   // if (products.length === 0) {
   //    return (
   //       <Body>
   //          <div style={{ color: "#ffffff", fontSize: "13px" }}>Database is empty</div>
   //       </Body>
   //    );
   // }

   return (
      <Body>
         <div className='products'>
            {products.length <= 0 ? (
               <div
                  className='products__box'
                  style={{
                     color: "#ffffff",
                     fontSize: "13px",
                     opacity: "0.5",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}>
                  Database is empty. Use right container to add new product.
               </div>
            ) : (
               <div className='products__box'>
                  <div
                     className='container__header'
                     style={{
                        color: "#ffffff",
                        fontSize: "13px",
                        fontWeight: "700",
                        filter: "brightness(0.7)",
                        marginBottom: "16px",
                     }}>
                     Product lists
                  </div>
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                     }}>
                     <span
                        style={{
                           filter: "brightness(0.5)",
                           fontSize: "11px",
                           marginBottom: "16px",
                        }}>
                        Click on product to edit them
                     </span>
                     <div>
                        <select
                           className='dhauShop__form--box--input'
                           style={{ filter: "brightness(0.8)", marginRight: "16px" }}>
                           <option value='' disabled selected>
                              Sort By
                           </option>
                           <option value='name'>Name (asc)</option>
                           <option value='category '>Recently added</option>
                        </select>
                        <select
                           name=''
                           id=''
                           className='dhauShop__form--box--input'
                           style={{ filter: "brightness(0.8)" }}>
                           <option value='' disabled='disabled' selected>
                              Filter category
                           </option>
                           <option value='Curd'>Curd</option>
                           <option value='Cake'>Cake</option>
                           <option value='Cheese'>Cheese</option>
                        </select>
                     </div>
                  </div>
                  {products &&
                     products.map((product) => {
                        return (
                           <div
                              key={product._id}
                              className={`products__box--card`}
                              style={
                                 product === selected
                                    ? {
                                         outline: " none !important",
                                         border: "1px solid #006bff",
                                         boxShadow: "0 0 3px #006aff9d",
                                      }
                                    : {}
                              }
                              onSelectCapture
                              onClick={(e) => {
                                 e.preventDefault();
                                 setSelected(product);
                              }}>
                              <div className='products__box--card--image'>
                                 <img
                                    className='products__box--card--img'
                                    src={`https://dhaushop.herokuapp.com/products/${product.photo}`}
                                    alt=''
                                 />
                              </div>
                              <div className='products__box--card--details'>
                                 <div className='products__box--card--child'>
                                    <div className='products__box--card--title'>Product Name</div>
                                    <div className='products__box--card--text'> {product.name}</div>
                                 </div>
                                 <div className='products__box--card--child'>
                                    <div className='products__box--card--title'>Category</div>
                                    <div className='products__box--card--text'>
                                       {" "}
                                       {product.category}
                                    </div>
                                 </div>
                                 <div className='products__box--card--child'>
                                    <div className='products__box--card--title'>Inventory</div>
                                    <div className='products__box--card--text'>
                                       {" "}
                                       {product.stock} in stock
                                    </div>
                                 </div>
                                 <div className='products__box--card--child'>
                                    <div className='products__box--card--title'>Price per item</div>
                                    <div className='products__box--card--text'>
                                       {" "}
                                       {product.price}
                                    </div>
                                 </div>
                                 <div className='products__box--card--child'>
                                    <div className='products__box--card--title'>Updated</div>
                                    <div className='products__box--card--text'>
                                       {moment(product.createdAt).fromNow(true)} ago
                                    </div>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
               </div>
            )}

            <div className='products__edit'>
               <div
                  className='container__header'
                  style={{
                     color: "#ffffff",
                     fontSize: "13px",
                     fontWeight: "700",
                     filter: "brightness(0.7)",
                     marginBottom: "16px",
                  }}>
                  Add a new product
               </div>
               <form action=''>
                  <div style={selected ? { display: "flex" } : null}>
                     {selected && (
                        <div>
                           <img
                              width='100px'
                              height='120px'
                              style={{
                                 borderRadius: "4px",
                                 objectFit: "cover",
                                 marginRight: "16px",
                              }}
                              src={`https://dhaushop.herokuapp.com/products/${
                                 selected ? selected.photo : products.photo
                              }`}
                              // src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dhau.JPG/220px-Dhau.JPG'
                              alt=''
                           />
                        </div>
                     )}

                     <div className='products__edit__dragndrop'>
                        <div className='products__edit__dragndrop--container'>
                           <div {...getRootProps({ style })}>
                              <input {...getInputProps()} />
                              {selected ? <p>Upload an image</p> : <p>Drag 'n' drop photos</p>}
                           </div>
                           <aside>
                              <h4>Files</h4>
                              {/* <ul>{files}</ul> */}
                           </aside>
                        </div>
                     </div>
                  </div>
               </form>
               <form action='' className='dhauShop__form--box'>
                  <label className='dhauShop__form--box--label'>Product name</label>
                  <input
                     className='dhauShop__form--box--input'
                     type='text'
                     name='name'
                     value={selected ? selected.name : products.name}
                     placeholder='eg: Juju Dhau'
                     onChange={handleChange}
                  />

                  <label className='dhauShop__form--box--label'>Description</label>
                  <textarea
                     className='dhauShop__form--box--input'
                     style={{ fontFamily: "inherit" }}
                     name='description'
                     onChange={handleChange}
                     value={selected ? selected.description : products.description}
                     rows='3'
                     placeholder='Write a short description about product'></textarea>

                  <label htmlFor='category' className='dhauShop__form--box--label'>
                     Category
                  </label>
                  <select
                     onChange={handleChange}
                     name='category'
                     id='category'
                     value={selected ? selected.category : products.category}
                     className='dhauShop__form--box--input'
                     style={{ color: "#ffffff66" }}>
                     <option value='' disabled='disabled' selected='true'>
                        Select an Option
                     </option>
                     <option value='Curd'>Curd</option>
                     <option value='Cake'>Cake</option>
                     <option value='Cheese'>Cheese</option>
                  </select>

                  <label className='dhauShop__form--box--label'>Stock</label>
                  <input
                     className='dhauShop__form--box--input'
                     type='text'
                     name='stock'
                     value={selected ? selected.stock : products.stock}
                     placeholder='stock'
                     onChange={handleChange}
                  />

                  <label className='dhauShop__form--box--label'>Price</label>
                  <input
                     className='dhauShop__form--box--input'
                     type='text'
                     value={selected ? selected.price : products.price}
                     name='price'
                     placeholder='price'
                     onChange={handleChange}
                  />
               </form>
               <Button
                  //   onClick={login}
                  style={{
                     width: "100%",
                     borderRadius: "4px",
                     height: "30px",
                     margin: "8px 0",
                     position: "relative",
                  }}
                  onclick={(e) => {
                     submitForms(e);
                  }}
                  // onclick={onButtonClick}
                  value={
                     promiseInProgress ? (
                        <div>
                           <Spinner />
                        </div>
                     ) : selected ? (
                        "Update"
                     ) : (
                        "Create"
                     )
                  }
                  type='blue'
               />
            </div>
         </div>
      </Body>
   );
};

export default Products;
