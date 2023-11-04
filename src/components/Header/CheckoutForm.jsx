// import React, { useState } from 'react';
// import axios from 'axios';
// import './CheckoutForm.scss'; // Import your CSS file

// function CheckoutForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     country: '',
//     mobile: '',
//     pinCode: '',
//     flat: '',
//     building: '',
//     area: '',
//     landmark: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/saveFormData', formData); // Change the endpoint to your backend API
//       alert('Form submitted successfully!');
//       // Clear the form fields
//       setFormData({
//         name: '',
//         email: '',
//         country: '',
//         mobile: '',
//         pinCode: '',
//         flat: '',
//         building: '',
//         area: '',
//         landmark: '',
//       });
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Country/Region:</label>
//           <input
//             type="text"
//             name="country"
//             placeholder="Country/Region"
//             value={formData.country}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Mobile Number:</label>
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Pin Code:</label>
//           <input
//             type="text"
//             name="pinCode"
//             placeholder="Pin Code"
//             value={formData.pinCode}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Flat/House No.:</label>
//           <input
//             type="text"
//             name="flat"
//             placeholder="Flat/House No."
//             value={formData.flat}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Building/Company/Apartment:</label>
//           <input
//             type="text"
//             name="building"
//             placeholder="Building/Company/Apartment"
//             value={formData.building}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Area/Street/Sector/Village:</label>
//           <input
//             type="text"
//             name="area"
//             placeholder="Area/Street/Sector/Village"
//             value={formData.area}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Landmark:</label>
//           <input
//             type="text"
//             name="landmark"
//             placeholder="Landmark"
//             value={formData.landmark}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CheckoutForm ;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { Footer, Navbar } from "../components";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3005/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         console.log("User details saved successfully!");
//         alert('Login successful!');
//         // You can redirect the user to a different page after successful login
//       } else {
//         const data = await response.json();
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <>
      
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="my-3">
//                 <label htmlFor="floatingInput">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="floatingPassword display-4">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="floatingPassword"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <p>
//                   New Here?{" "}
//                   <Link
//                     to="/register"
//                     className="text-decoration-underline text-info"
//                   >
//                     Register
//                   </Link>{" "}
//                 </p>
//               </div>
//               <div className="text-center">
//                 <button
//                   className="my-2 mx-auto btn btn-dark"
//                   type="submit"
//                   disabled={!email || !password}
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [flat, setFlat] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [building, setBuilding] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          country,
          mobileNumber,
          pinCode,
          flat,
          houseNo,
          building,
          area,
          landmark,
        }),
      });

      if (response.ok) {
        console.log("User details saved successfully!");
        alert('Submit successful!'); // Updated alert message
        // You can redirect the user to a different page after successful login
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="form-box">
          <h1 className="text-center">Shipping Address</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="floatingInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="floatingPassword display-4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                {/* Additional inputs */}
                <div className="my-3">
                  <label htmlFor="country">Country/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Country/Region"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="pinCode">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    placeholder="Pin Code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="flat">Flat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="flat"
                    placeholder="Flat"
                    value={flat}
                    onChange={(e) => setFlat(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="houseNo">House No.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="houseNo"
                    placeholder="House No."
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="building">Building/Company/Apartment</label>
                  <input
                    type="text"
                    className="form-control"
                    id="building"
                    placeholder="Building/Company/Apartment"
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="area">Area/Street/Sector/Village</label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    placeholder="Area/Street/Sector/Village"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    placeholder="Landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/SignupPage"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    className="my-2 mx-auto btn btn-dark"
                    type="submit"
                  >
                    Submit Details
                  </button>
                  <div><Link to="/PaymentPage" ><center><button>Payment</button></center></Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;