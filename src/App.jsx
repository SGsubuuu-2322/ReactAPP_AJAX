// import React from 'react'
// import axios from "axios";
// import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Services from "./Components/Services";

const App = () => {
  // const addData = () => {
  //   const api = "https://fakestoreapi.com/products";

  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((product) => console.log(product))
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="mt-[2%] ">
      <nav className="flex justify-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
