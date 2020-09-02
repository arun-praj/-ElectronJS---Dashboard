import React from "react";
import Button from "../../ui/Button/Button";

// import login from "./LoginAPI";

import "./Login.scss";

const Store = window.require("electron-store");
const store = new Store();
// const fs = require("fs");

const Login = () => {
   //    console.log(store);
   //    store.set("unicorn", "🦄");
   //    console.log(store.get("unicorn"));
   store.set("unicorn", "Unicorn");
   console.log(store.get("unicorn"));

   return (
      <div className='login'>
         <div className='login__form'>
            <div className='login__form--heading'>Welcome back ;)</div>
            <form action='' className='login__form--box'>
               <label className='login__form--box--label'>Email</label>
               <input
                  type='email'
                  className='login__form--box--input'
                  placeholder='example@email.com'
               />
               <label className='login__form--box--label'>Password</label>

               <input type='password' className='login__form--box--input' placeholder='Required' />
               <Button
                  //   onClick={login}
                  style={{
                     width: "100%",
                     borderRadius: "4px",
                     height: "30px",
                     marginBottom: "16px",
                  }}
                  value='Login'
                  type='blue'
               />
               <label className='login__form--box--warning'>
                  Note: Must have an admin account in{" "}
                  <a href='dhaushop.herokuapp.com'>dhaushop.herokuapp.com</a>
               </label>
            </form>
         </div>
      </div>
   );
};

export default Login;
