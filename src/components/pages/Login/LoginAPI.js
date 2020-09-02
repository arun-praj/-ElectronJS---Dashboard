import axios from "axios";

// const setAuthToken = (token) => {
//    if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//    } else {
//       delete axios.defaults.headers.common["Authorization"];
//    }
// };

const login = (body) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   try {
      const res = axios.post("/api/auth/login", body, config);
      console.log(res);
   } catch (e) {
      console.log(e);
   }
};
export default login;
