
import React, { useState } from 'react';
// import react from 'react';
// import React, * as react from 'react';
import jwt_decode from "jwt-decode";

import { Link, } from 'react-router-dom';
import './styles.modules.css';
import  axios  from 'axios' ;
// import { useResolvedPath } from 'react-router';
const Signup = () => {
    const [data, setData] = useState({
      // id:"",
        email: "",
        password:"",
      
      });
     
      const [error, setError] = useState("") 


      const handleChage = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url ="http://localhost:4000/api/auth/login"; 
          const response = await axios.post(url, data);
          console.log(response.data.accessToken);
          const user = jwt_decode(response.data.accessToken);
          localStorage.setItem("name", JSON.stringify(response.data.accessToken))
          if(user.role==="client" || "user"){
            window.location = "/" 
        
          }if(user.role==="admin" || "owner"){
            window.location = "/dashboard" 
         
          }
//         //  const users =  axios.get('http://localhost:3000/api/users')
// .then(response => {
//   console.log(response);
  

// }
// );
                          // window.location = "/" 

          // console.log(data)
          // if(data.role==="client"){
          //             window.location = "/" 
          // } else{
          //      window.location = "/signup" 
          // }
      
          } catch (error) {
          if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500 
          ){
            setError(error.response.data.message)

          }
        }
      }
  return (
    <div className="login_container" >
       <div className="login_form_container">
         <div className="left">
         <form className="form_container" onSubmit={handleSubmit}>
         <h1>Login to Your Account</h1>
           
            <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleChage}
            value={data.email}
            required
            className="input"
            />
           <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={data.password}
            required
            className="input"
            />
          {error && <div className="error_msg"> (errror)</div>}

          <button type="submit" className="green_btn">
            Login
          </button>
         </form>
         </div>
         <div className="right"></div>
           <h1>New Here?</h1>
           <Link to="/signup" >
             <button type='button' className= "white_btn">
                Sign In
             </button>
           </Link>
       </div>
    </div>
  )
}
export default Signup;
