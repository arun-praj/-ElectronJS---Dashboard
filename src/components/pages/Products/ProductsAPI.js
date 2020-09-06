import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";
// export const fetchProducts = (setProducts) => {};

export const createProduct = (productDetails, token, setProducts, photo) => {
   const { stock, description, price, name, category } = productDetails;

   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
      },
   };
   console.log(productDetails);
   const body = {
      stock,
      description,
      price,
      name,
      category,
      size: [3, 5, 6],
      averageRating: 1,
      photo: "default_curd.jpg",
   };
   console.log(photo);

   trackPromise(
      axios
         .post("https://dhaushop.herokuapp.com/api/products", body, config)
         .then((res) => {
            if (res) {
               const formData = new FormData();
               formData.append("file", photo);
               console.log(res.data.data._id);
               axios
                  .put(
                     `https://dhaushop.herokuapp.com/api/products/${res.data.data._id}`,
                     formData,
                     {
                        headers: {
                           Authorization: `Bearer ${token}`,
                           "Content-Type": "multipart/form-data",
                           "Access-Control-Allow-Origin": "*",
                        },
                     }
                  )
                  .then((res) => {
                     console.log("Photo Gayo", res);
                  })
                  .catch((e) => {
                     toast.dark("Image upload failed", {
                        position: toast.POSITION.TOP_RIGHT,
                     });
                  });

               toast.success("Successfull Bitch", {
                  position: toast.POSITION.BOTTOM_LEFT,
               });

               setProducts((prev) => {
                  return [...prev, res.data.data];
               });

               console.log(res.data.msg);
            }
         })

         .catch((e) => {
            console.log(e);
            toast.dark("Failed to save changes", {
               position: toast.POSITION.TOP_RIGHT,
            });
         })
   );
   // axios.post();
};
